import { copyFile, mkdir, readdir, rename } from "node:fs/promises";
import { basename } from "node:path";
import type { Icons } from "../../types";
import type { ChannelContext } from "../channel";
import { commit } from "../git";
import type { Progress } from "../progress";
import { apkSplits } from "../shared";
import { discordPath, join, listRequiredDirs, sortObj } from "../utils";

interface Asset {
	httpServerLocation: string;
	width?: number;
	height?: number;
	hash: string;
	name: string;
	type: "png" | "svg" | "lottie";
}

const assetTypes = new Set<Asset["type"]>(["png", "svg", "lottie"]);
const registerAssetRegex = /\bregisterAsset\s*\(/g;
// A call wider than this is a false positive (the token showed up in a comment or a
// string), not a real asset registration. Bail instead of scanning the whole bundle.
const maxCallLength = 1 << 16;

/**
 * Splits the top-level arguments of a call or literal that opens at `start`.
 * String-aware so braces, brackets and commas inside literals never shift the depth.
 */
function splitArgs(text: string, start: number): string[] | null {
	const open = text[start];
	if (open !== "(" && open !== "[" && open !== "{") return null;

	const args: string[] = [];
	let depth = 0;
	let quote = "";
	let argStart = start + 1;

	for (let i = start; i < text.length && i - start < maxCallLength; i++) {
		const char = text[i];

		if (quote) {
			if (char === "\\") i++;
			else if (char === quote) quote = "";
		} else if (char === '"' || char === "'" || char === "`") quote = char;
		else if (char === "(" || char === "[" || char === "{") depth++;
		else if (char === ")" || char === "]" || char === "}") {
			depth--;
			if (depth === 0) {
				args.push(text.slice(argStart, i).trim());
				return args;
			}
		} else if (char === "," && depth === 1) {
			args.push(text.slice(argStart, i).trim());
			argStart = i + 1;
		}
	}

	return null;
}

function evalLiteral(source: string | undefined): any {
	if (!source) return;
	try {
		return JSON.parse(source);
	} catch {}
	try {
		return new Function(`return (${source})`)();
	} catch {}
}

function isAsset(value: any): value is Asset {
	if (!value || typeof value !== "object") return false;
	if (typeof value.httpServerLocation !== "string" || typeof value.hash !== "string") return false;
	if (typeof value.name !== "string" || !assetTypes.has(value.type)) return false;
	return !value.httpServerLocation.includes("node_modules/.pnpm");
}

export async function parseAssets(channel: ChannelContext, code: string[] | string) {
	const text = Array.isArray(code) ? code.join("\n") : code;

	const retrievedAssets: (Asset & { scales: number[] })[] = [];

	for (const match of text.matchAll(registerAssetRegex)) {
		const args = splitArgs(text, match.index + match[0].length - 1);
		if (!args) continue;

		const asset = evalLiteral(args[0]);
		if (!isAsset(asset)) continue;

		const scales = evalLiteral(args[1]);
		retrievedAssets.push({ ...asset, scales: Array.isArray(scales) ? scales : [] });
	}

	console.log(`Found ${retrievedAssets.length} registerAsset call(s)`);
	if (!retrievedAssets.length)
		throw new Error(
			"No assets parsed from the bundle. The decompiler output format likely changed — refusing to wipe the existing icons.",
		);

	const apkPaths = new Map<string, string>();
	for (const split of apkSplits) {
		const folder = join(channel.apksFolder, split);
		// A split is absent whenever its APK failed to download; that is not fatal.
		for (const path of await readdir(folder, { recursive: true }).catch(() => []))
			apkPaths.set(basename(path), join(folder, path));
	}

	const iconsDir = join(channel.canvasDir, "icons");

	const icons: Icons = {};
	const toCopy: { from: string; to: string }[] = [];
	for (const asset of retrievedAssets) {
		const baseName = [...asset.httpServerLocation.split("/").slice(2), asset.name]
			.join("_")
			.toLowerCase()
			.replace(/\W+/g, "");
		const path = `${baseName}.${asset.type}`;

		const apkPath = apkPaths.get(path);
		if (apkPath) {
			const realPath = join(
				discordPath(asset.httpServerLocation.split("/").slice(2).join("/")),
				`${asset.name}.${asset.type}`,
			);

			icons[asset.name] = {
				file: realPath,
				hash: asset.hash,
				scales: asset.scales,
				width: asset.width ?? null,
				height: asset.height ?? null,
			};
			toCopy.push({
				from: apkPath,
				to: join(iconsDir, realPath),
			});
		}
	}

	console.log(`Matched ${Object.keys(icons).length}/${retrievedAssets.length} asset(s) to a file in the APKs`);

	return { icons, toCopy };
}

export default async function icons(channel: ChannelContext, progress: Progress, code: string[] | string) {
	progress.start("icons_getting");

	const { icons, toCopy } = await parseAssets(channel, code);
	await Bun.write(join(channel.canvasDir, "icons.json"), JSON.stringify(sortObj(icons), undefined, 4));
	progress.update("icons_getting", true);

	progress.start("icons_copying");

	const iconsDir = join(channel.canvasDir, "icons");
	const oldIconsDir = join(channel.canvasDir, "oldicons");
	await rename(iconsDir, oldIconsDir).catch(() => {});
	const dirs = listRequiredDirs(toCopy.map((x) => x.to));

	await Promise.all(dirs.map((dir) => mkdir(dir, { recursive: true })));

	// Chunked so a few thousand icons don't exhaust the file descriptor table.
	const batchSize = 64;
	let copied = 0;
	for (let i = 0; i < toCopy.length; i += batchSize) {
		await Promise.all(
			toCopy.slice(i, i + batchSize).map(async ({ from, to }) => {
				if (await copyFile(from, to).then(
					() => true,
					() => false,
				))
					copied++;
			}),
		);
	}
	if (copied !== toCopy.length) console.warn(`Only copied ${copied}/${toCopy.length} icon files`);

	await commit(["icons.json", "icons"], `chore: update icons for ${channel.cuteVersion}`, channel.canvasDir);
	progress.update("icons_copying", true);
}
