// Module ID: 1395
// Function ID: 1396
// Name: set
// Dependencies: [2]

// Module 1395 (set)
import set from "set" /* 2 */;

const obj = { ALL: null };
let set = new Set([0, 1]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ThreadSortOrder.tsx");

export const ThreadSortOrder = { LATEST_ACTIVITY: 0, [0]: "LATEST_ACTIVITY", CREATION_DATE: 1, [1]: "CREATION_DATE" };
export const ThreadSortOrderSets = obj;
