import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { createCanvas, GlobalFonts, type SKRSContext2D } from "@napi-rs/canvas";
import { file } from "bun";
import type { Item, Row, Section } from "./factory";
import { measureText, transformSvg, wrapText } from "./utils";

async function bulkRegister(family: string, path: string) {
	for (const item of await readdir(path)) GlobalFonts.registerFromPath(join(path, item), family);
}
await bulkRegister("GG Sans", join(import.meta.dir, "fonts/ggsans"));
await bulkRegister("GG Mono", join(import.meta.dir, "fonts/ggmono"));

const layout = {
	background: { padding: 24, gap: 18 },
	section: { gap: 8 },
	card: { radius: 24, padding: 12, gapX: 16, gapY: 8 },
	blob: { radius: 12 },
	color: { radius: 24 },
};

const textSizes = { header: 24, title: 18, blob: 24 };

const colors = {
	background: "#1c1d23",
	section: "#26272f",
	blob: "#6c6f7c1f",
	textNormal: "#c7c8ce",
	textMuted: "#818491",
	watermark: "#2f3035",
};

const itemSize = 128;
const blobSize = itemSize + layout.card.gapY + textSizes.title;

const watermark = await transformSvg(await file(join(import.meta.dir, "placeholders/watermark.svg")).text(), {
	color: colors.watermark,
	height: layout.background.padding,
});

const mctx = createCanvas(1, 1).getContext("2d");
const headerFont = `600 ${textSizes.header}px GG Sans`;
const titleFont = `400 ${textSizes.title}px GG Mono`;

function calcColumnWidth(column: { textWidth: number; itemWidth: number }[]) {
	return Math.max(0, ...column.map(({ textWidth, itemWidth }) => Math.max(0, textWidth, itemWidth)));
}

function calcColumnHeight(column: Row[]) {
	const texts = column
		.map((row) => Number(!!row.title) + Number(!!row.subtitle) + Number(row.item.type === "blob"))
		.reduce((a, b) => a + b, 0);
	const items = texts + column.length - 1;
	return texts * textSizes.title + column.length * itemSize + items * layout.card.gapY;
}

function calcSectionHeight(columns: Row[][]) {
	return Math.max(0, ...columns.map((column) => calcColumnHeight(column)));
}

function measureItemWidth(item: Item) {
	if (item.type === "blob") return blobSize;
	if (item.type === "image") return (item.image.width / item.image.height) * itemSize;
	return itemSize;
}

function measureRow(row: Row) {
	return {
		title: row.title,
		subtitle: row.subtitle,
		textWidth: Math.max(
			0,
			row.title ? measureText(mctx, titleFont, row.title).width : 0,
			row.subtitle ? measureText(mctx, titleFont, row.subtitle).width : 0,
		),
		item: row.item,
		itemWidth: measureItemWidth(row.item),
	};
}

function measureSections(sections: Section[]) {
	const sects = sections.map(({ header, columns }) => ({
		headerWidth: measureText(mctx, headerFont, header).width,
		header,
		columns: columns.map((column) => column.map(measureRow)),
	}));

	const columnWidths = Array.from({ length: Math.max(0, ...sects.map(({ columns }) => columns.length)) }, (_, i) =>
		Math.max(0, ...sects.map(({ columns }) => (columns[i] ? calcColumnWidth(columns[i]) : 0))),
	);

	const sectionWidth =
		columnWidths.reduce((a, b) => a + b, 0) + layout.card.gapX * (columnWidths.length - 1) + layout.card.padding * 2;

	const width = Math.max(0, ...sects.map(({ headerWidth }) => headerWidth), sectionWidth);
	const height =
		sects
			.map(
				({ columns }) =>
					textSizes.header +
					layout.section.gap +
					layout.card.padding * 2 +
					calcSectionHeight(columns) +
					layout.background.gap,
			)
			.reduce((a, b) => a + b, 0) - layout.background.gap;

	return { sects, columnWidths, sectionWidth, width, height };
}

function renderBlob(ctx: SKRSContext2D, blob: string, x: number, y: number, width: number, height: number) {
	ctx.fillStyle = colors.blob;
	ctx.beginPath();
	ctx.roundRect(x, y, width, height, layout.blob.radius);
	ctx.fill();

	ctx.font = `600 ${textSizes.blob}px GG Sans`;
	ctx.fillStyle = colors.textNormal;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	const wrapped = wrapText(ctx, blob, width);
	const lineHeight = textSizes.blob / 2;
	for (let i = 0; i < wrapped.length; i++) {
		ctx.fillText(wrapped[i], x + width / 2, y + height / 2 - lineHeight * (wrapped.length - 1) + textSizes.blob * i);
	}

	ctx.textAlign = "left";
	ctx.textBaseline = "top";
}

function renderColor(ctx: SKRSContext2D, colorGrid: string[][], x: number, y: number) {
	for (let i = 0; i < colorGrid.length; i++) {
		const row = colorGrid[i];
		for (let j = 0; j < row.length; j++) {
			ctx.save();
			ctx.beginPath();
			ctx.rect(
				Math.floor(x + (itemSize / row.length) * j),
				Math.floor(y + (itemSize / colorGrid.length) * i),
				Math.ceil(itemSize / row.length),
				Math.ceil(itemSize / colorGrid.length),
			);
			ctx.clip();

			ctx.beginPath();
			ctx.fillStyle = row[j];
			ctx.roundRect(x, y, itemSize, itemSize, layout.color.radius);
			ctx.fill();
			ctx.restore();
		}
	}
}

export function drawSections(sections: Section[]) {
	const { sects, columnWidths, sectionWidth, width, height } = measureSections(sections);

	const canvas = createCanvas(layout.background.padding * 2 + width, layout.background.padding * 2 + height);
	const ctx = canvas.getContext("2d");
	ctx.textBaseline = "top";

	ctx.fillStyle = colors.background;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	let x = layout.background.padding;
	let y = layout.background.padding;
	for (const sect of sects) {
		ctx.fillStyle = colors.textNormal;
		ctx.font = headerFont;
		ctx.fillText(sect.header, x, y);
		y += textSizes.header + layout.section.gap;

		const sectionHeight = calcSectionHeight(sect.columns);
		ctx.fillStyle = colors.section;
		ctx.beginPath();
		ctx.roundRect(x, y, sectionWidth, sectionHeight + layout.card.padding * 2, layout.card.radius);
		ctx.fill();
		y += layout.card.padding;
		x += layout.card.padding;

		let wx = x;
		for (let i = 0; i < sect.columns.length; i++) {
			let wy = y;

			const column = sect.columns[i];
			const columnWidth = columnWidths[i];
			if (!columnWidth) throw new Error(`Failed to get columnWidth for ${i}, ${columnWidth}`);

			const centerX = wx + columnWidth / 2;
			for (const row of column) {
				ctx.font = titleFont;
				if (row.subtitle) {
					ctx.fillStyle = colors.textMuted;
					ctx.fillText(row.subtitle, centerX - row.textWidth / 2, wy);
					wy += textSizes.title + layout.card.gapY;
				}
				if (row.title) {
					ctx.fillStyle = colors.textNormal;
					ctx.fillText(row.title, centerX - row.textWidth / 2, wy);
					wy += textSizes.title + layout.card.gapY;
				}

				const midX = centerX - row.itemWidth / 2;
				if (row.item.type === "blob") {
					renderBlob(ctx, row.item.blob, wx, wy, columnWidth, sectionHeight - wy + y);
				} else if (row.item.type === "image") {
					ctx.drawImage(row.item.image, midX, wy, row.itemWidth, itemSize);
					wy += itemSize + layout.card.gapY;
				} else if (row.item.type === "color") {
					renderColor(ctx, row.item.colors, midX, wy);
					wy += itemSize + layout.card.gapY;
				}
			}
			wx += columnWidth + layout.card.gapX;
		}
		y += sectionHeight;

		x -= layout.card.padding;
		y += layout.card.padding;
		y += layout.background.gap;
	}

	ctx.drawImage(watermark, canvas.width - watermark.width - 1, 1);

	return canvas;
}
