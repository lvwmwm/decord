// Module ID: 1357
// Function ID: 16282
// Name: set
// Dependencies: [2]

// Module 1357 (set)
import set from "set";

const obj = {};
let set = new Set([0, 1]);
obj.ALL = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ThreadSortOrder.tsx");

export const ThreadSortOrder = { LATEST_ACTIVITY: 0, [0]: "LATEST_ACTIVITY", CREATION_DATE: 1, [1]: "CREATION_DATE" };
export const ThreadSortOrderSets = obj;
