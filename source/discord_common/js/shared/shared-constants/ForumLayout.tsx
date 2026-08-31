// Module ID: 1397
// Function ID: 1398
// Name: set
// Dependencies: [2]

// Module 1397 (set)
import set from "set" /* 2 */;

const obj = { ALL: null };
let set = new Set([0, 1, 2]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ForumLayout.tsx");

export const ForumLayout = { DEFAULT: 0, [0]: "DEFAULT", LIST: 1, [1]: "LIST", GRID: 2, [2]: "GRID" };
export const ForumLayoutSets = obj;
