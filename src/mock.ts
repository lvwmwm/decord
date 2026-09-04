import { type CodeDiff, DiffType } from "./types";

export default {
	raw: new Map(),
	semantic: new Map(),
	icons: new Map(),
	code: new Map<string, CodeDiff>([
		[
			"app/foomodule.tsx",
			{
				type: DiffType.Added,
				size: 24782,
			},
		],
		[
			"app/ui/barmodule.ts",
			{
				type: DiffType.Renamed,
				oldName: "app/legacy/ui/bar_module.ts",
				size: 5212,
			},
		],
		[
			"app/intl/ReallyBigCoolComponent.tsx",
			{
				type: DiffType.Removed,
				size: 46532,
			},
		],
	]),
};
