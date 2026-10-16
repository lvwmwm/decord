import { runInNewContext } from "node:vm";
import Color, { type ColorInstance } from "color";
import type { RawColors, SemanticColors } from "../../types";
import type { ChannelContext } from "../channel";
import { commit } from "../git";
import { join, sortObj } from "../utils";

function hex(color: ColorInstance) {
	return (color.alpha() === 1 ? color.hex() : color.hexa()).toLowerCase();
}

// Support both old python decompiler (rX[rY] bug) and new Rust
function fixHermesDecIndex(code: string) {
	return code.replace(/r(\d+)\[(\d+)\] =/g, "r$1[r$2] =");
}

// The Rust decompiler names the module-2 default import after its original symbol
// (`size`, …) instead of the old `set`, and emits container objects *before* the
// objects they point at exist. Rewrite the snippet so it runs standalone in a VM.
const importRe = /^import\s+([A-Za-z_$][\w$]*)\s+from\s+"[^"]+"[^\n]*$/gm;
const forwardRefRe =
	/^([ \t]*)(?:(const|let|var)\s+)?([A-Za-z_$][\w$]*)(\s*=\s*)(\{\s*[A-Za-z_$][\w$]*\s*:\s*[A-Za-z_$][\w$]*\s*(?:,\s*[A-Za-z_$][\w$]*\s*:\s*[A-Za-z_$][\w$]*\s*)*\})\s*;/gm;

const themeRe = /theme/i;
const exportPrivateRe = /export\s+const\s+_private/;
const themesStub = "new Proxy({}, { get: (_, key) => key.toString().toLowerCase() })";

function stubImport(_match: string, name: string, mod: string) {
	// The themes provider is imported under varying names (`items`, `ThemeTypes`, …).
	if (name === "items" || themeRe.test(name) || themeRe.test(mod))
		return `const ${name} = { _private: { Themes: ${themesStub} } };`;
	return `const ${name} = { fileFinishedImporting: () => {} };`;
}

// `{ A: obj1, B: obj2 }` where obj1/obj2 are assigned *after* the literal runs.
// Make those properties getters so they resolve once the whole module has executed.
function deferForwardRefs(
	_match: string,
	indent: string,
	kind: string | undefined,
	name: string,
	_eq: string,
	literal: string,
) {
	const pairs = literal
		.slice(1, -1)
		.split(",")
		.map((pair) => pair.split(":").map((part) => part.trim()) as [key: string, value: string]);
	const props = pairs
		.map(
			([key, value]) =>
				`Object.defineProperty(${name}, ${JSON.stringify(key)}, { get: () => ${value}, enumerable: true, configurable: true });`,
		)
		.join(`\n${indent}`);
	return `${indent}${kind ? `${kind} ` : ""}${name} = {};\n${indent}${props}`;
}

function prepareSnippet(snippet: string): string {
	return snippet
		.replace(importRe, stubImport)
		.replace(/^import.*$/gm, "")
		.replace(forwardRefRe, deferForwardRefs);
}

function findModuleSnippet(code: string[] | string, importPath: string): string | null {
	const text = Array.isArray(code) ? code.join("\n") : code;
	const parts = text.split(/(?=\/\/ === Module \d+:)/);
	for (const part of parts) if (part.includes(importPath)) return part;
	return null;
}

function evalRawModule(snippet: string): any {
	let code = prepareSnippet(snippet);
	code = code.replace(exportPrivateRe, "const _private");
	code = `${code}\n; _private;`;
	const result = runInNewContext(code, {});
	if (!result || typeof result !== "object" || !result.RawColors || typeof result.RawColors !== "object") {
		throw new Error(
			"VM evaluation failed: RawColors not found or invalid shape. The regex transforms may not match the current decompiler output.",
		);
	}
	return result;
}

function evalSemanticModule(snippet: string): any {
	let code = prepareSnippet(snippet);
	code = code.replace(exportPrivateRe, "const _private");
	code = `${code}\n; _private;`;
	code = fixHermesDecIndex(code);
	const result = runInNewContext(code, {});
	if (!result || typeof result !== "object" || !result.SemanticColors || typeof result.SemanticColors !== "object") {
		throw new Error(
			"VM evaluation failed: SemanticColors not found or invalid shape. The regex transforms may not match the current decompiler output.",
		);
	}
	return result;
}

export function getInternalRawColors(code: string[] | string) {
	const snippet = findModuleSnippet(code, "raw-color-definitions.tsx");
	if (!snippet) throw new Error("Cannot find raw-color-definitions module");
	const mod = evalRawModule(snippet);
	const raw: RawColors = {};
	for (const [key, color] of Object.entries(mod.RawColors as Record<string, string>)) {
		raw[key] = hex(Color(color as string));
	}
	return raw;
}

export function getInternalSemanticColors(code: string[] | string, raw: Record<string, string>) {
	const snippet = findModuleSnippet(code, "native/generated-definitions");
	if (!snippet) throw new Error("Cannot find semantic definitions module");
	const mod = evalSemanticModule(snippet);
	const semantic: SemanticColors = {};
	for (const [key, colors] of Object.entries(
		mod.SemanticColors as Record<string, Record<string, { raw: string; opacity: number }>>,
	)) {
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

export default async function colors(channel: ChannelContext, code: string[] | string) {
	const raw = getInternalRawColors(code);
	await Bun.write(join(channel.canvasDir, "raw.json"), JSON.stringify(sortObj(raw), null, 4));

	const semantic = getInternalSemanticColors(code, raw);
	await Bun.write(join(channel.canvasDir, "semantic.json"), JSON.stringify(sortObj(semantic), null, 4));
	await Bun.write(
		join(channel.canvasDir, "semantic_simple.json"),
		JSON.stringify(sortObj(convertSimpleSemantic(semantic)), null, 4),
	);

	await commit(
		["raw.json", "semantic.json", "semantic_simple.json"],
		`chore: update colors for ${channel.cuteVersion}`,
		channel.canvasDir,
	);
}
