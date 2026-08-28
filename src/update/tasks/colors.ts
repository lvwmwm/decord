import { runInNewContext } from "node:vm";
import Color, { type ColorInstance } from "color";
import type { RawColors, SemanticColors } from "../../types";
import { commit } from "../git";
import { cuteVersion } from "../shared";
import { sortObj } from "../utils";

function hex(color: ColorInstance) {
	return (color.alpha() === 1 ? color.hex() : color.hexa()).toLowerCase();
}

// Support both old python decompiler (rX[rY] bug) and new Rust
function fixHermesDecIndex(code: string) {
	return code.replace(/r(\d+)\[(\d+)\] =/g, "r$1[r$2] =");
}

function findModuleSnippet(code: string[], importPath: string): string | null {
	const text = code.join("\n");
	const parts = text.split(/(?=\/\/ === Module \d+:)/);
	for (const part of parts) if (part.includes(importPath)) return part;
	return null;
}

function evalRawModule(snippet: string): any {
	let code = snippet;
	code = code.replace(/^import set from "set".*$/m, "const __importSet = { fileFinishedImporting: () => {} };");
	code = code.replace(/^import.*$/gm, "");
	code = code.replace(/set\.fileFinishedImporting/g, "__importSet.fileFinishedImporting");
	code = code.replace(/export\s+const\s+_private/, "const _private");
	code = code + "\n; _private;";
	return runInNewContext(code, {});
}

function evalSemanticModule(snippet: string): any {
	let code = snippet;
	code = code.replace(/^import set from "set".*$/m, "const __importSet = { fileFinishedImporting: () => {} };");
	code = code.replace(/^import items from "items".*$/m, "const items = { _private: { Themes: new Proxy({}, { get(_, k){ return k.toString().toLowerCase(); } }) } };");
	code = code.replace(/^import.*$/gm, "");
	code = code.replace(/set\.fileFinishedImporting/g, "__importSet.fileFinishedImporting");
	code = code.replace(/export\s+const\s+_private/, "const _private");
	code = code + "\n; _private;";
	code = fixHermesDecIndex(code);
	return runInNewContext(code, {});
}

export function getInternalRawColors(code: string[]) {
	const snippet = findModuleSnippet(code, "raw-color-definitions.tsx");
	if (!snippet) throw new Error("Cannot find raw-color-definitions module");
	const mod = evalRawModule(snippet);
	const raw: RawColors = {};
	for (const [key, color] of Object.entries(mod.RawColors as Record<string, string>)) {
		raw[key] = hex(Color(color as string));
	}
	return raw;
}

export function getInternalSemanticColors(code: string[], raw: Record<string, string>) {
	const snippet = findModuleSnippet(code, "native/generated-definitions");
	if (!snippet) throw new Error("Cannot find semantic definitions module");
	const mod = evalSemanticModule(snippet);
	const semantic: SemanticColors = {};
	for (const [key, colors] of Object.entries(mod.SemanticColors as Record<string, Record<string, { raw: string; opacity: number }>>)) {
		const color: SemanticColors[string] = {};
		for (const [theme, val] of Object.entries(colors)) {
			if (typeof val !== "object" || !("raw" in val)) continue;
			color[theme] = [hex(Color(raw[val.raw]).alpha(val.opacity)), { raw: val.raw, opacity: val.opacity }];
		}
		semantic[key] = color;
	}
	return semantic;
}

export function convertSimpleSemantic(semantic: SemanticColors) {
	const simpleSemantic: Record<string, Record<string, string>> = {};
	for (const [key, colors] of Object.entries(semantic)) {
		const color: Record<string, string> = {};
		for (const [theme, [clr]] of Object.entries(colors)) color[theme] = clr;
		simpleSemantic[key] = color;
	}
	return simpleSemantic;
}

export default async function colors(code: string[]) {
	const raw = getInternalRawColors(code);
	await Bun.write("../canvas/raw.json", JSON.stringify(sortObj(raw), null, 4));

	const semantic = getInternalSemanticColors(code, raw);
	await Bun.write("../canvas/semantic.json", JSON.stringify(sortObj(semantic), null, 4));
	await Bun.write("../canvas/semantic_simple.json", JSON.stringify(sortObj(convertSimpleSemantic(semantic)), null, 4));

	await commit(["raw.json", "semantic.json", "semantic_simple.json"], `chore: update colors for ${cuteVersion}`, "../canvas");
}
