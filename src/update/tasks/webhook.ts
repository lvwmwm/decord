import { basename } from "node:path";
import { type CodeDiff, type Differs, DiffType } from "../../types";
import { cuteVersion, maxDiffChanges, version } from "../shared";
import { formatBytes, sortEntries } from "../utils";

function fileBase(path: string, other?: string) {
	if (!other) return `... ${basename(path)}`;
	const paths = path.split("/"),
		others = other.split("/");

	let offset = 0;
	while (offset < Math.min(paths.length, others.length) - 1 && paths[offset] === others[offset]) {
		offset++;
	}

	return `... ${paths.slice(offset).join("/")}`;
}

function makeFooter(size: number, item: string) {
	return `**${size.toLocaleString("en-US")}** ${item} change${size !== 1 ? "s" : ""} total`;
}

function getThreshold(lines: string[]) {
	return lines.some((x) => x.includes("\n")) ? Math.floor(maxDiffChanges / 2) : maxDiffChanges;
}

function cap(lines: string[], item: string) {
	const threshold = getThreshold(lines);
	if (lines.length > threshold)
		return [...lines.slice(0, threshold), `(+${(lines.length - threshold).toLocaleString("en-US")} ${item})`];
	return lines;
}

interface FormattedDiff {
	embed: string[];
	file: string;
	capped: boolean;
}

function formatDiff(diffs: Map<string, CodeDiff>): FormattedDiff {
	const entries = [...diffs.entries()];

	const sections = {
		Added: sortEntries(entries)
			.map(
				([name, diff]) =>
					diff.type === DiffType.Added && `+ ${fileBase(name)} (${formatBytes(diff.size)})`,
			)
			.filter((x) => typeof x === "string"),
		Renamed: sortEntries(entries)
			.map(
				([name, diff]) =>
					diff.type === DiffType.Renamed &&
					`- ${fileBase(diff.oldName, name)}\n+ ${fileBase(name, diff.oldName)}`,
			)
			.filter((x) => typeof x === "string"),
		Removed: sortEntries(entries)
			.map(
				([name, diff]) =>
					diff.type === DiffType.Removed && `- ${fileBase(name)} (${formatBytes(diff.size)})`,
			)
			.filter((x) => typeof x === "string"),
	};

	const text = Object.entries(sections).filter(([, lines]) => lines.length);
	return {
		embed: text.map(
			([title, lines]) => `### ${title}\n\`\`\`diff\n${cap(lines, title.toLowerCase()).join("\n")}\`\`\``,
		),
		file: text.map(([title, lines]) => `# ${title}\n\n${lines.join("\n")}`).join("\n\n"),
		capped: text.some(([, lines]) => lines.length > getThreshold(lines)),
	};
}

export async function webhook(diffs: Differs) {
	if (diffs.code?.size) {
		const body = JSON.stringify({
			content: `Code changes for **${version} (${cuteVersion})**`,
			embeds: [
				{
					title: "Code",
					description: formatDiff(diffs.code).embed.join("\n"),
					footer: { text: makeFooter(diffs.code.size, "code") },
				},
			],
		});

		const webhookUrl = process.env.code_webhook;
		if (webhookUrl) {
			await fetch(webhookUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body,
			});
		}
	}
}
