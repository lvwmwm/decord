import { type CodeDiff, DiffType } from "./types";

export default {
	code: new Map([
		[
			"app/foomodule.tsx",
			{
				type: DiffType.Added,
				size: 24782,
			} as CodeDiff,
		],
		[
			"app/ui/barmodule.ts",
			{
				type: DiffType.Renamed,
				oldName: "app/legacy/ui/bar_module.ts",
				size: 5212,
			} as CodeDiff,
		],
		[
			"app/intl/ReallyBigCoolComponent.tsx",
			{
				type: DiffType.Removed,
				size: 46532,
			} as CodeDiff,
		],
	]),
};
