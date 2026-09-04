import { exists } from "node:fs/promises";
import { spawn } from "bun";
import { commit } from "../git";
import type { Progress } from "../progress";
import { codePath, commitAnyway, cuteVersion, modulePathsDest, modulesPath, workFolder } from "../shared";
import { handleShellErr, join } from "../utils";

const bundleDest = join("..", "data", "index.android.bundle");

const gzipWorkerURL = new URL("decompile-gzip.ts", import.meta.url).href;

// generous cap so a hanging decompiler is aborted deterministically instead of wedging the job
const DECOMPILE_TIMEOUT_MS = 20 * 60 * 1000;

async function runDecompiler(cmd: string[], label: string) {
	const proc = spawn({ cmd, stdout: "pipe", stderr: "pipe", stdin: "ignore" });
	const timer = setTimeout(() => {
		console.warn(`${label} exceeded ${DECOMPILE_TIMEOUT_MS / 1000}s, killing it`);
		proc.kill();
	}, DECOMPILE_TIMEOUT_MS);
	const exitCode = await proc.exited;
	clearTimeout(timer);
	const out = `${await new Response(proc.stdout).text().catch(() => "")}${await new Response(proc.stderr)
		.text()
		.catch(() => "")}`.trim();
	if (exitCode !== 0 && exitCode !== 11) throw new Error(`${label} failed (exit ${exitCode})\n${out}`.trim());
}

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
		await Bun.$`cargo build --release -p hbc-decomp-cli`.cwd(pathToDecompiler).quiet().nothrow().then(handleShellErr);
	}

	if (!(await Bun.file(codePath).exists())) {
		await runDecompiler([decompilerBin, "decompile", pathToBundle, "--output", codePath], "decompile");
	}

	if (!(await exists(modulesPath))) {
		await runDecompiler([decompilerBin, "extract", pathToBundle, "--output", modulesPath], "extract");
	}

	progress.update("decompile_decompiling", true);

	progress.start("decompile_paths");
	const codeJs = await Bun.file(codePath).text();
	const modulePaths: { id: number; path: string }[] = [];
	const moduleSections = codeJs.split(/\/\/ === Module (\d+): .+ ===\n?/);
	for (let i = 1; i < moduleSections.length; i += 2) {
		const modId = Number.parseInt(moduleSections[i], 10);
		const content = moduleSections[i + 1] || "";
		const m = content.match(/fileFinishedImporting\("([^"]+)"\)/);
		if (m) modulePaths.push({ id: modId, path: m[1] });
	}
	await Bun.write(modulePathsDest, JSON.stringify(modulePaths));
	console.log(`Extracted ${modulePaths.length} module paths`);
	progress.update("decompile_paths", true);

	if (process.env.NODE_ENV !== "test" && !commitAnyway) {
		const gzFile = "code.js.gz";

		await Bun.write(bundleDest, Bun.file(pathToBundle));

		const gzipper = new Worker(gzipWorkerURL);
		progress.start("decompile_gzip");
		const { promise: gzipDone, resolve: resolveGzip } = Promise.withResolvers<void>();
		gzipper.addEventListener("message", async ({ data }) => {
			if (data === true) {
				await commit(
					[gzFile, "module-paths.json", "index.android.bundle"],
					`chore: update decompiled code for ${cuteVersion}`,
				);
				progress.update("decompile_gzip", true);
			}
			gzipper.terminate();
			resolveGzip();
		});
		gzipper.postMessage({ path: codePath, target: join("../data", gzFile) });
		return gzipDone;
	}
	progress.update("decompile_gzip", null);
}
