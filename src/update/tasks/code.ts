import { mkdir, rm, readdir, stat } from "node:fs/promises";
import { join as pathJoin } from "node:path";
import { commit } from "../git";
import type { Progress } from "../progress";
import { commitAnyway, cuteVersion, moduleMapPath, modulesPath } from "../shared";
import { join, sortEntries } from "../utils";

const moduleIdRegex = /^module_(\d+)\.js$/;
const idPrefixRegex = /^(\d+)_(.+)$/;

function extractModuleId(filename: string): number | undefined {
	let m = filename.match(moduleIdRegex);
	if (m) return Number.parseInt(m[1], 10);
	m = filename.match(idPrefixRegex);
	if (m) return Number.parseInt(m[1], 10);
}

function sanitizePath(name: string): string {
	return name.replace(/[<>:"|?*]/g, "_").replace(/\.\./g, "__");
}

export default async function code(progress: Progress, _code: string[]) {
	progress.start("code_getting");

	if (!(await stat(modulesPath).catch(() => false))) {
		throw new Error(`Modules directory not found at ${modulesPath}`);
	}

	const moduleMap = new Map<number, string>();
	try {
		const mapRaw = await Bun.file(moduleMapPath).json();
		if (Array.isArray(mapRaw)) {
			for (const entry of mapRaw) {
				if (entry.name?.trim()) moduleMap.set(entry.id, entry.name);
			}
		} else if (mapRaw && typeof mapRaw === "object") {
			for (const [key, value] of Object.entries(mapRaw)) {
				const id = Number(key);
				if (!Number.isNaN(id) && typeof value === "string" && value.trim()) {
					moduleMap.set(id, value);
				}
			}
		}
	} catch {}
	console.log(`Loaded ${moduleMap.size} module name mappings`);

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

	function resolveDest(relativePath: string): string {
		const id = extractModuleId(relativePath);
		if (id !== undefined) {
			const mappedName = moduleMap.get(id);
			if (mappedName) return sanitizePath(mappedName) + ".js";
		}
		return relativePath;
	}

	const files = new Map<string, number>();
	for (const [relativePath, fileSize] of rawFiles) {
		files.set(resolveDest(relativePath), fileSize);
	}

	await Bun.write(
		"../data/source.jsonl",
		sortEntries([...files.entries()])
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
				const dest = join(filePrefix, resolveDest(relativePath));
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
