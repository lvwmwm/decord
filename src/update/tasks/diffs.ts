import { type CodeDiff, type Differs, DiffType } from "../../types";
import { fetchGitChanged, gitChanged } from "../git";
import { type Progress, wrapPromise } from "../progress";
import { diffAnyway, prevFiles } from "../shared";
import { join, parseJsonl } from "../utils";

function parseSource(text: string) {
	const source = parseJsonl(text) as { file: string; size: number }[];
	return Object.fromEntries(
		source.map(({ file, size }) => [file, { size, compSize: size - JSON.stringify(file).length }]),
	) as Record<string, { size: number; compSize: number }>;
}

async function diffCode() {
	if (!prevFiles.has("source.jsonl")) {
		throw new Error("Missing prevFile: source.jsonl");
	}

	const oldCode = parseSource(new TextDecoder().decode(prevFiles.get("source.jsonl")));
	const newCode = parseSource(await Bun.file(join("../data", "source.jsonl")).text());

	const renamed = new Set<string>();
	const changes = new Map<string, CodeDiff>();
	for (const [name, { size, compSize }] of Object.entries(newCode)) {
		if (!oldCode[name]) {
			const oldName = Object.entries(oldCode).find(([key, val]) => !newCode[key] && val.compSize === compSize)?.[0];

			if (!oldName)
				changes.set(name, {
					type: DiffType.Added,
					size,
				});
			else {
				renamed.add(oldName);
				changes.set(name, {
					type: DiffType.Renamed,
					oldName,
					size,
				});
			}
		}
	}
	for (const [name, { size }] of Object.entries(oldCode))
		if (!(newCode[name] || renamed.has(name)))
			changes.set(name, {
				type: DiffType.Removed,
				size,
			});

	return changes;
}

export default async function diffs(progress: Progress) {
	await fetchGitChanged();

	if (!(gitChanged.has("version.txt") || diffAnyway)) {
		progress.update("diff", null);
		progress.update("diff_code", null);
		return;
	}

	const differs = {} as Differs;

	await Promise.all([
		gitChanged.has("source.jsonl")
			? wrapPromise(
					diffCode().then((x) => (differs.code = x)),
					progress,
					"diff_code",
				)
			: progress.update("diff_code", null),
	]);

	progress.update("diff", true);
	return differs;
}
