import { exists, rm } from "node:fs/promises";
import mock from "../mock";
import type { Differs } from "../types";
import { commit } from "./git";
import { log, makeProgress, wrapPromise } from "./progress";
import { apksFolder, codePath, cuteVersion, isMock, isQuiet, oprevFiles, prevFiles, version } from "./shared";
import codeTask from "./tasks/code";
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
			diff: "Diffs",
			diff_code: "Diffing code",
		},
		true,
	);
	let differs: Differs | undefined;

	if (!isMock) {
		try {
			progress.start("preinit");

			progress.start("preinit_discard");
			await Bun.$`git reset --hard`.cwd("../data").nothrow().quiet().then(handleShellErr);
			await Bun.write("../data/version.txt", version);

			await Bun.$`git restore --staged .`.cwd("../data").nothrow().quiet().then(handleShellErr);

			progress.update("preinit_discard", true);

			progress.start("preinit_save");
			for (const oprev of oprevFiles) {
				const file = Bun.file(join("../data", oprev));
				if (await file.exists()) prevFiles.set(oprev, await file.arrayBuffer());
			}
			progress.update("preinit_save", true);
			progress.update("preinit", true);
		} catch (e) {
			progress.update("preinit", false);
			throw new Error(`Failed to discard changes!\n${e}`);
		}

		try {
			await wrapPromise(
				decompile(progress, join(apksFolder, "base", "assets", "index.android.bundle")),
				progress,
				"decompile",
			);
		} catch (e) {
			throw new Error(`Failed to decompile!\n${e}`);
		}

		const code = (await Bun.file(codePath).text()).replace(/\r/g, "").split("\n");

		await wrapPromise(codeTask(progress, code), progress, "code");
		if (progress.someFailed("code"))
			throw new Error(`Failed at parser tasks!\n${progress.prettyErrors("code")}`);

		while (!progress.isFinished("decompile_gzip")) {
			await Bun.sleep(1000);
		}

		if (progress.someFailed("decompile_gzip"))
			throw new Error(`Failed at the decompile gzip task!\n${progress.prettyErrors("decompile_gzip")}`);

		try {
			differs = await diffs(progress);
			progress.update("diff", true);
		} catch (e: any) {
			progress.update("diff", false, formatError(e));
			throw new Error(`Failed to generate diffs!\n${formatError(e)}`);
		}
	} else {
		differs = mock;
	}

	if (differs && !isQuiet) {
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
}
