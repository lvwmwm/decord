// Module ID: 1968
// Function ID: 1969
// Name: set
// Dependencies: [2]

// Module 1968 (set)
import set from "set" /* 2 */;

const obj = { ALL: null };
let set = new Set(["match_all", "match_some"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ThreadSearchTagSetting.tsx");

export const ThreadSearchTagSetting = { MATCH_ALL: "match_all", MATCH_SOME: "match_some" };
export const ThreadSearchTagSettingSets = obj;
