import {
	type CodeDiff,
	type Diff,
	type Differs,
	DiffType,
	type Icons,
	type RawColors,
	type SemanticColors,
} from "../../types";
import { fetchGitChanged, gitChanged } from "../git";
import { type Progress, wrapPromise } from "../progress";
import { diffAnyway, prevFiles } from "../shared";
import { join, parseJsonl } from "../utils";

interface DiffOpts<TOld, TNew> {
	getSource: (key: string, val: TNew) => string;
	getLabel?: (key: string, val: TNew) => string;
	getOldSource?: (key: string, val: TOld) => string;
	getOldLabel?: (key: string, val: TOld) => string;
	isRename: (newKey: string, oldVal: TOld, newVal: TNew) => boolean;
	isChanged?: (oldVal: TOld, newVal: TNew) => boolean;
}

function diffEntries<TOld, TNew>(
	oldEntries: Record<string, TOld>,
	newEntries: Record<string, TNew>,
	opts: DiffOpts<TOld, TNew>,
): Map<string, Diff> {
	const changes = new Map<string, Diff>();
	const renamed = new Set<string>();

	for (const [name, newVal] of Object.entries(newEntries)) {
		const oldVal = oldEntries[name];
		if (oldVal === undefined) {
			const oldName = Object.entries(oldEntries).find(
				([key, val]) => !(key in newEntries) && opts.isRename(name, val, newVal),
			)?.[0];

			if (!oldName) {
				changes.set(name, {
					type: DiffType.Added,
					source: opts.getSource(name, newVal),
					label: opts.getLabel?.(name, newVal),
				});
			} else {
				renamed.add(oldName);
				changes.set(name, { type: DiffType.Renamed, oldName, source: opts.getSource(name, newVal) });
			}
		} else if (opts.isChanged?.(oldVal, newVal)) {
			changes.set(name, {
				type: DiffType.Changed,
				source: opts.getSource(name, newVal),
				label: opts.getLabel?.(name, newVal),
				oldSource: opts.getOldSource?.(name, oldVal) ?? "",
				oldLabel: opts.getOldLabel?.(name, oldVal),
			});
		}
	}

	for (const [name, oldVal] of Object.entries(oldEntries)) {
		if (name in newEntries || renamed.has(name)) continue;
		changes.set(name, {
			type: DiffType.Removed,
			source: opts.getOldSource?.(name, oldVal) ?? "",
			label: opts.getOldLabel?.(name, oldVal),
		});
	}

	return changes;
}

function diffEntriesCode(
	oldEntries: Record<string, { size: number; compSize: number }>,
	newEntries: Record<string, { size: number; compSize: number }>,
): Map<string, CodeDiff> {
	const changes = new Map<string, CodeDiff>();
	const renamed = new Set<string>();

	for (const [name, newVal] of Object.entries(newEntries)) {
		if (!(name in oldEntries)) {
			const oldName = Object.entries(oldEntries).find(
				([key, val]) => !(key in newEntries) && val.compSize === newVal.compSize,
			)?.[0];

			if (!oldName) {
				changes.set(name, { type: DiffType.Added, size: newVal.size });
			} else {
				renamed.add(oldName);
				changes.set(name, { type: DiffType.Renamed, oldName, size: newVal.size });
			}
		}
	}

	for (const [name, oldVal] of Object.entries(oldEntries)) {
		if (!(name in newEntries || renamed.has(name))) {
			changes.set(name, { type: DiffType.Removed, size: oldVal.size });
		}
	}

	return changes;
}

async function diffRaw() {
	if (!prevFiles.has("raw.json")) throw new Error("Missing prevFile: raw.json");

	const oldRaw = JSON.parse(new TextDecoder().decode(prevFiles.get("raw.json"))) as RawColors;
	const newRaw: RawColors = await Bun.file(join("../canvas", "raw.json")).json();

	return diffEntries(oldRaw, newRaw, {
		getSource: (_, val) => val,
		isRename: (newKey, oldVal, newVal) => !(newKey in newRaw) && oldVal === newVal,
		isChanged: (oldVal, newVal) => oldVal.toLowerCase() !== newVal.toLowerCase(),
	});
}

function getSemanticLabel(semantic: Record<string, [string, unknown]>) {
	const light = semantic.light;
	const dark = semantic.darker ?? semantic.dark;
	if (dark && light) return `${light[0]}, ${dark[0]}`;
	return Object.entries(semantic)
		.map(([name, [color]]) => `${name} ${color}`)
		.join(", ");
}

async function diffSemantic() {
	if (!prevFiles.has("semantic.json")) throw new Error("Missing prevFile: semantic.json");

	const oldSemantic = JSON.parse(new TextDecoder().decode(prevFiles.get("semantic.json"))) as SemanticColors;
	const newSemantic: SemanticColors = await Bun.file(join("../canvas", "semantic.json")).json();

	const changes = diffEntries(oldSemantic, newSemantic, {
		getSource: (_, val) =>
			Object.values(val)
				.map(([color]) => color)
				.join(","),
		getLabel: (_, val) => getSemanticLabel(val),
		isRename: (newKey, oldVal, newVal) => {
			const themes = Object.keys(newVal).length;
			return (
				!(newKey in newSemantic) &&
				Object.keys(oldVal).length === themes &&
				Object.entries(oldVal).every(([skey, sval]) => sval[0] === newVal[skey]?.[0])
			);
		},
	});

	for (const [name, semantic] of Object.entries(newSemantic)) {
		if (oldSemantic[name]) {
			for (const [theme, [color]] of Object.entries(semantic)) {
				if (!oldSemantic[name][theme]) {
					changes.set(`${name}.${theme}`, { type: DiffType.Added, source: color });
				} else if (oldSemantic[name][theme][0].toLowerCase() !== color.toLowerCase()) {
					changes.set(`${name}.${theme}`, {
						type: DiffType.Changed,
						source: color,
						oldSource: oldSemantic[name][theme][0],
					});
				}
			}
		}
	}

	for (const [name, semantic] of Object.entries(oldSemantic)) {
		if (name in newSemantic) {
			for (const [theme, [source]] of Object.entries(semantic)) {
				if (!newSemantic[name][theme]) {
					changes.set(`${name}.${theme}`, { type: DiffType.Removed, source });
				}
			}
		}
	}

	return changes;
}

async function diffIcons() {
	if (!prevFiles.has("icons.json")) throw new Error("Missing prevFile: icons.json");

	const oldIcons = JSON.parse(new TextDecoder().decode(prevFiles.get("icons.json"))) as Icons;
	const newIcons: Icons = await Bun.file(join("../canvas", "icons.json")).json();

	const iconDir = { old: join("../canvas", "oldicons"), new: join("../canvas", "icons") };

	return diffEntries(oldIcons, newIcons, {
		getSource: (_, val) => join(iconDir.new, val.file),
		getLabel: (_, val) => val.hash.slice(0, 8),
		getOldSource: (_, val) => join(iconDir.old, val.file),
		getOldLabel: (_, val) => val.hash.slice(0, 8),
		isRename: (newKey, oldVal, newVal) => !(newKey in newIcons) && oldVal.hash === newVal.hash,
		isChanged: (oldVal, newVal) => oldVal.hash !== newVal.hash,
	});
}

function parseSource(text: string) {
	const source = parseJsonl(text) as { file: string; size: number }[];
	return Object.fromEntries(
		source.map(({ file, size }) => [file, { size, compSize: size - JSON.stringify(file).length }]),
	) as Record<string, { size: number; compSize: number }>;
}

async function diffCode() {
	if (!prevFiles.has("source.jsonl")) throw new Error("Missing prevFile: source.jsonl");

	const oldCode = parseSource(new TextDecoder().decode(prevFiles.get("source.jsonl")));
	const newCode = parseSource(await Bun.file(join("../data", "source.jsonl")).text());

	return diffEntriesCode(oldCode, newCode);
}

export default async function diffs(progress: Progress) {
	await fetchGitChanged();

	if (!(gitChanged.has("version.txt") || diffAnyway)) {
		progress.update("diff", null);
		progress.update("diff_raw", null);
		progress.update("diff_semantic", null);
		progress.update("diff_icons", null);
		progress.update("diff_code", null);
		return;
	}

	const differs: Differs = { raw: new Map(), semantic: new Map(), icons: new Map(), code: new Map() };

	await Promise.all([
		gitChanged.has("raw.json")
			? wrapPromise(
					diffRaw().then((x) => (differs.raw = x)),
					progress,
					"diff_raw",
				)
			: progress.update("diff_raw", null),
		gitChanged.has("semantic.json")
			? wrapPromise(
					diffSemantic().then((x) => (differs.semantic = x)),
					progress,
					"diff_semantic",
				)
			: progress.update("diff_semantic", null),
		gitChanged.has("icons.json")
			? wrapPromise(
					diffIcons().then((x) => (differs.icons = x)),
					progress,
					"diff_icons",
				)
			: progress.update("diff_icons", null),
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
