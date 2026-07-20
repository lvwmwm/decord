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

export type Differs = {
	code: Map<string, CodeDiff> | undefined;
};
