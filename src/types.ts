export enum DiffType {
	Added,
	Changed,
	Renamed,
	Removed,
}

export type CodeDiff =
	| {
			type: DiffType.Added | DiffType.Removed;
			size: number;
	  }
	| {
			type: DiffType.Renamed;
			oldName: string;
			size: number;
	  };

export type RawColors = Record<string, string>;

export type Icons = Record<
	string,
	{
		file: string;
		hash: string;
		scales: number[];
		width: number | null;
		height: number | null;
	}
>;

export type Semantic = Record<string, [string, { raw: string; opacity: number }]>;
export type SemanticColors = Record<string, Semantic>;

export type Differs = {
	code: Map<string, CodeDiff> | undefined;
};
