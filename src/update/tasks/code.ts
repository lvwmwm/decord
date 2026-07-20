import { mkdir, rm, readdir, stat } from "node:fs/promises";
import { join as pathJoin } from "node:path";
import { commit } from "../git";
import type { Progress } from "../progress";
import { commitAnyway, cuteVersion, modulesPath } from "../shared";
import { join, sortEntries } from "../utils";

export default async function code(progress: Progress, _code: string[]) {
	progress.start("code_getting");

	if (!(await stat(modulesPath).catch(() => false))) {
		throw new Error(`Modules directory not found at ${modulesPath}`);
	}

	async function scanDir(dir: string, basePath: string): Promise<Map<string, number>> {
		const files = new Map<string, number>();
		const entries = await readdir(dir, { withFileTypes: true });
		for (const entry of entries) {
			const fullPath = join(dir, entry.name);
			if (entry.isDirectory()) {
				const subFiles = await scanDir(fullPath, basePath);
				for (const [name, size] of subFiles) files.set(name, size);
			} else if (entry.isFile()) {
				const relativePath = fullPath.replace(basePath, "").replace(/^\//, "");
				const stats = await stat(fullPath);
				files.set(relativePath, stats.size);
			}
		}
		return files;
	}

	const rawFiles = await scanDir(modulesPath, modulesPath);

	await Bun.write(
		"../data/source.jsonl",
		sortEntries([...rawFiles.entries()])
			.map(([file, size]) => `{ "file": ${JSON.stringify(file)}, "size": ${size} }`)
			.join("\n"),
	);

	progress.update("code_getting", true);

	if (process.env.NODE_ENV !== "test" && !commitAnyway) {
		progress.start("code_remaking");

		const filePrefix = "../data/source";
		await rm(filePrefix, { recursive: true, force: true });

		await Promise.all(
			[...rawFiles.entries()].map(async ([relativePath]) => {
				const dest = join(filePrefix, relativePath);
				await mkdir(pathJoin(dest, ".."), { recursive: true });
				await Bun.write(dest, Bun.file(join(modulesPath, relativePath)));
			}),
		);

		progress.update("code_remaking", true);
		progress.start("code_pushing");

		await Bun.sleep(1500);

		await commit(["source.jsonl", "source/*"], `chore: update source for ${cuteVersion}`);
		progress.update("code_pushing", true);
	} else {
		progress.update("code_remaking", null);
		progress.update("code_pushing", null);
	}
}
