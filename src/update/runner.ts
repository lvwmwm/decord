import mock from "../mock";
import type { Differs } from "../types";
import { commit } from "./git";
import { log, makeProgress, wrapPromise } from "./progress";
import { apksFolder, codePath, cuteVersion, isMock, isQuiet, oprevFiles, prevFiles, version } from "./shared";
import codeTask from "./tasks/code";
import colorsTask from "./tasks/colors";
import decompile from "./tasks/decompile";
import diffs from "./tasks/diffs";
import { formatError, handleShellErr, join } from "./utils";

export async function runTasks() {
	log("\nRunning tasks...");
	const progress = makeProgress(
		{
			preinit: "Preinit",
			preinit_discard: "Discarding changes",
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

			progress.start("preinit_discard");
			await Bun.$`git clean -f -- .update-skipped`
				.cwd("../data")
				.nothrow()
				.quiet()
				.catch(() => {});
			await Bun.$`git reset --hard`.cwd("../data").nothrow().quiet().then(handleShellErr);
			await Bun.write("../data/version.txt", version);
			// canvas branch may not exist in test
			await Bun.$`git reset --hard`
				.cwd("../canvas")
				.nothrow()
				.quiet()
				.then(() => {});
			await Bun.write("../canvas/version.txt", version).catch(() => {});

			await Bun.$`git restore --staged .`.cwd("../data").nothrow().quiet().then(handleShellErr);
			await Bun.$`git restore --staged .`
				.cwd("../canvas")
				.nothrow()
				.quiet()
				.then(() => {});

			progress.update("preinit_discard", true);

			progress.start("preinit_save");
			for (const oprev of oprevFiles) {
				for (const base of ["../data", "../canvas"] as const) {
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
			throw new Error(`Failed to discard changes!\n${e}`);
		}

		try {
			gzipDone = (await wrapPromise(
				decompile(progress, join(apksFolder, "base", "assets", "index.android.bundle")),
				progress,
				"decompile",
			)) as Promise<void> | undefined;
		} catch (e) {
			const detail = (formatError(e) || String(e)).split("\n")[0];
			console.warn(
				`\nDecompile failed or timed out (${detail}).` +
					`\nSkipping update for this release so the next run can retry.\n`,
			);
			// restore version.txt so the next check sees the release as still pending and re-runs
			await Bun.$`git checkout -- version.txt`
				.cwd("../data")
				.nothrow()
				.quiet()
				.catch(() => {});
			await Bun.$`git checkout -- version.txt`
				.cwd("../canvas")
				.nothrow()
				.quiet()
				.catch(() => {});
			// mark the run as skipped so the workflow won't publish/tag a release that never decompiled
			await Bun.write("../data/.update-skipped", version).catch(() => {});
			return;
		}

		const code = (await Bun.file(codePath).text()).replace(/\r/g, "").split("\n");

		await wrapPromise(codeTask(progress, code), progress, "code");
		if (progress.someFailed("code")) throw new Error(`Failed at parser tasks!\n${progress.prettyErrors("code")}`);
		// colors is non-critical, run in background
		wrapPromise(colorsTask(code), progress, "colors").catch((e) => {
			progress.update("colors", false, String(e));
			console.warn("Colors task failed (non-critical):", e);
		});
		// icons disabled for now (6h hang due to parseAssets), will be fixed separately
		// wrapPromise(iconsTask(progress, code), progress, "icons").catch((e) => {
		// 	progress.update("icons", false, String(e));
		// 	console.warn("Icons task failed (non-critical):", e);
		// });
		progress.update("icons", null);
		progress.update("diff_icons", null);

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
			const result = await diffs(progress);
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

	await commit(["version.txt"], `chore: bump app version to ${cuteVersion}`);
	// canvas version bump (if canvas checkout exists)
	try {
		await commit(["version.txt"], `chore: bump app version to ${cuteVersion}`, "../canvas");
	} catch {}
}
