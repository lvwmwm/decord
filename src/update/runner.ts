import mock from "../mock";
import type { Differs } from "../types";
import type { ChannelContext } from "./channel";
import { commit } from "./git";
import { log, makeProgress, wrapPromise } from "./progress";
import { isMock, isQuiet, oprevFiles, prevFiles } from "./shared";
import codeTask from "./tasks/code";
import colorsTask from "./tasks/colors";
import decompile from "./tasks/decompile";
import diffs from "./tasks/diffs";
import iconsTask from "./tasks/icons";
import { formatError, join } from "./utils";

export async function runTasks(channel: ChannelContext) {
	log(`\nRunning tasks for ${channel.cuteVersion}...`);
	const progress = makeProgress(
		{
			preinit: "Preinit",
			preinit_save: "Caching original files",
			decompile: "Decompilation",
			decompile_downloading: "Downloading decompiler",
			decompile_decompiling: "Decompiling index.android.bundle",
			decompile_gzip: "Compressing code",
			code: "Code parser",
			code_getting: "Finding file imports",
			code_remaking: "Recreating code",
			code_pushing: "Committing source",
			colors: "Colors",
			colors_getting: "Extracting colors",
			colors_pushing: "Committing colors",
			icons: "Icon parser",
			icons_getting: "Writing icons.json",
			icons_copying: "Copying images",
			diff: "Diffs",
			diff_code: "Diffing code",
			diff_raw: "Diffing raw colors",
			diff_semantic: "Diffing semantic colors",
			diff_icons: "Diffing icons",
		},
		true,
	);
	let differs: Differs = { raw: new Map(), semantic: new Map(), icons: new Map(), code: new Map() };

	let gzipDone: Promise<void> | undefined;

	if (!isMock) {
		try {
			progress.start("preinit");

			progress.start("preinit_save");
			prevFiles.clear();
			for (const oprev of oprevFiles) {
				for (const base of [channel.dataDir, channel.canvasDir] as const) {
					const file = Bun.file(join(base, oprev));
					if (await file.exists()) {
						prevFiles.set(oprev, await file.arrayBuffer());
						break;
					}
				}
			}
			progress.update("preinit_save", true);
			progress.update("preinit", true);
		} catch (e) {
			progress.update("preinit", false);
			throw new Error(`Failed to cache original files!\n${e}`);
		}

		try {
			gzipDone = (await wrapPromise(
				decompile(channel, progress, join(channel.apksFolder, "base", "assets", "index.android.bundle")),
				progress,
				"decompile",
			)) as Promise<void> | undefined;
		} catch (e) {
			const detail = (formatError(e) || String(e)).split("\n")[0];
			console.warn(
				`\nDecompile failed or timed out (${detail}).` +
					`\nSkipping ${channel.channel} for this release so the next run can retry.\n`,
			);
			return;
		}

		await Bun.write(join(channel.dataDir, "version.txt"), channel.version);
		await Bun.write(join(channel.canvasDir, "version.txt"), channel.version).catch(() => {});

		const code = (await Bun.file(channel.codePath).text()).replace(/\r/g, "");

		const [, colorsResult, iconsResult] = await Promise.allSettled([
			wrapPromise(codeTask(channel, progress, code.split("\n")), progress, "code"),
			wrapPromise(colorsTask(channel, code), progress, "colors"),
			wrapPromise(iconsTask(channel, progress, code), progress, "icons"),
		]);

		if (progress.someFailed("code")) throw new Error(`Failed at parser tasks!\n${progress.prettyErrors("code")}`);
		for (const [name, result] of [
			["colors", colorsResult],
			["icons", iconsResult],
		] as const)
			if (result.status === "rejected")
				console.warn(`\n${name} task failed (non-critical), canvas left untouched:\n${formatError(result.reason)}\n`);

		if (gzipDone) {
			try {
				await gzipDone;
			} catch (e) {
				if (progress.someFailed("decompile_gzip"))
					throw new Error(`Failed at the decompile gzip task!\n${progress.prettyErrors("decompile_gzip")}`);
				throw e;
			}
		}

		if (progress.someFailed("decompile_gzip"))
			throw new Error(`Failed at the decompile gzip task!\n${progress.prettyErrors("decompile_gzip")}`);

		try {
			const result = await diffs(channel, progress);
			if (result) {
				differs = result;
				progress.update("diff", true);
			}
		} catch (e: any) {
			progress.update("diff", false, formatError(e));
			throw new Error(`Failed to generate diffs!\n${formatError(e)}`);
		}
	} else {
		differs = mock;
	}

	if (!isQuiet) {
		try {
			const { webhook } = await import("./tasks/webhook");
			await wrapPromise(webhook(differs), progress, "webhook");
		} catch (e: any) {
			throw new Error(`Failed to send webhook messages!\n${formatError(e)}`);
		}
	} else {
		progress.update("webhook", null);
	}

	await commit(["version.txt"], `chore: bump app version to ${channel.cuteVersion}`, channel.dataDir);
	// canvas version bump (if canvas checkout exists)
	try {
		await commit(["version.txt"], `chore: bump app version to ${channel.cuteVersion}`, channel.canvasDir);
	} catch {}
}
