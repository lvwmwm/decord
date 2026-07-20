import { exists } from "node:fs/promises";
import { commit } from "../git";
import type { Progress } from "../progress";
import { codePath, commitAnyway, cuteVersion, moduleMapPath, modulesPath, workFolder } from "../shared";
import { handleShellErr, join } from "../utils";

const gzipWorkerURL = new URL("decompile-gzip.ts", import.meta.url).href;

export default async function decompile(progress: Progress, pathToBundle: string) {
	const pathToDecompiler = join(workFolder, "decompiler");

	progress.start("decompile_downloading");
	if (!(await exists(pathToDecompiler))) {
		await Bun.$`git clone https://github.com/SymbioticSec/hermes-decomp.git --depth=1 ${pathToDecompiler}`
			.quiet()
			.nothrow()
			.then(handleShellErr);
		progress.update("decompile_downloading", true);
	} else progress.update("decompile_downloading", null);

	const { exitCode: hasCargo } = await Bun.$`cargo --version`.nothrow().quiet();
	if (hasCargo !== 0) throw new Error("Cannot use Cargo! Are you sure Rust is installed?");

	progress.start("decompile_decompiling");
	const decompilerBin = join(pathToDecompiler, "target/release/hermes-decomp");
	if (!(await Bun.file(decompilerBin).exists())) {
		await Bun.$`cargo build --release -p hbc-decomp-cli`
			.cwd(pathToDecompiler)
			.quiet()
			.nothrow()
			.then(handleShellErr);
	}

	if (!(await Bun.file(codePath).exists())) {
		await Bun.$`${decompilerBin} decompile ${pathToBundle} --output ${codePath}`
			.quiet()
			.nothrow()
			.then(handleShellErr);
	}

	if (!(await exists(modulesPath))) {
		await Bun.$`${decompilerBin} extract ${pathToBundle} --output ${modulesPath}`
			.quiet()
			.nothrow()
			.then(handleShellErr);
	}

	if (!(await Bun.file(moduleMapPath).exists())) {
		await Bun.$`${decompilerBin} dump ${pathToBundle} --kind cjs-modules --json`
			.quiet()
			.nothrow()
			.then(handleShellErr)
			.then((out) => Bun.write(moduleMapPath, out.stdout));
	}

	progress.update("decompile_decompiling", true);

	if (process.env.NODE_ENV !== "test" && !commitAnyway) {
		const gzFile = "code.js.gz";

		const gzipper = new Worker(gzipWorkerURL);
		progress.start("decompile_gzip");
		gzipper.addEventListener("message", async ({ data }) => {
			if (data === true) {
				await commit([gzFile], `chore: update decompiled code for ${cuteVersion}`);
				progress.update("decompile_gzip", true);
			}
			gzipper.terminate();
		});
		gzipper.postMessage({ path: codePath, target: join("../data", gzFile) });
	} else {
		progress.update("decompile_gzip", null);
	}
}
