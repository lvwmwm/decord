import { copyFile, mkdir, readdir, rename } from "node:fs/promises";
import { basename } from "node:path";
import { runInNewContext } from "node:vm";
import type { Icons } from "../../types";
import { commit } from "../git";
import type { Progress } from "../progress";
import { apkSplits, apksFolder, cuteVersion } from "../shared";
import { discordPath, join, listRequiredDirs, sortObj } from "../utils";

const infoObjRegex = /({.+?})/;
const scalesArrayRegex = /(\[.+?\])/;

// canvas branch stores icons
const iconsJsonPath = "../canvas/icons.json";
const iconsDir = "../canvas/icons";
const oldIconsDir = "../canvas/oldicons";

export async function parseAssets(code: string[]) {
	const retrievedAssets: {
		httpServerLocation: string;
		width: number;
		height: number;
		scales: number[];
		hash: string;
		name: string;
		type: "png" | "svg" | "lottie";
	}[] = [];

	for (let i = 0; i < code.length; i++) {
		const line = code[i],
			infoLine = code[i + 1],
			scalesLine = code[i + 2];

		if (line.includes(".registerAsset") && infoLine?.includes("'httpServerLocation'") && scalesLine?.includes("[")) {
			const infoText = infoLine.match(infoObjRegex)?.[1];
			if (!infoText) throw new Error(`Failed to find infoText for ${infoLine} (line ${i + 1})`);

			const scalesText = scalesLine.match(scalesArrayRegex)?.[1];
			if (!scalesText) throw new Error(`Failed to find scalesText for ${scalesLine} (line ${i + 2})`);

			const info = runInNewContext(`(${infoText})`);
			if (typeof info !== "object") continue;

			const scales = runInNewContext(`(${scalesText})`);
			if (!Array.isArray(scales)) continue;

			info.scales = scales;

			if (
				["httpServerLocation", "hash", "name", "type"].every((x) => x in info) &&
				["svg", "png", "lottie"].includes(info.type) &&
				!info.httpServerLocation.includes("node_modules/.pnpm")
			) {
				retrievedAssets.push(info);
			}
		}
	}

	const apkPaths = new Map<string, string>();
	for (const split of apkSplits) {
		const folder = join(apksFolder, split);
		for (const path of await readdir(folder, { recursive: true })) apkPaths.set(basename(path), join(folder, path));
	}

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

	return { icons, toCopy };
}

export default async function icons(progress: Progress, code: string[]) {
	progress.start("icons_getting");

	const { icons, toCopy } = await parseAssets(code);
	await Bun.write(iconsJsonPath, JSON.stringify(sortObj(icons), undefined, 4));
	progress.update("icons_getting", true);

	progress.start("icons_copying");

	await rename(iconsDir, oldIconsDir).catch(() => {});
	const dirs = listRequiredDirs(toCopy.map((x) => x.to));

	await Promise.all(dirs.map((dir) => mkdir(dir, { recursive: true })));
	await Promise.all(toCopy.map(({ from, to }) => copyFile(from, to)));

	await commit(["icons.json", "icons"], `chore: update icons for ${cuteVersion}`, "../canvas");
	progress.update("icons_copying", true);
}
