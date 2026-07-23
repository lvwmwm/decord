// Module ID: 1359
// Function ID: 16283
// Name: set
// Dependencies: [2]

// Module 1359 (set)
import set from "set";

const obj = {};
let set = new Set(["match_all", "match_some"]);
obj.ALL = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ThreadSearchTagSetting.tsx");

export const ThreadSearchTagSetting = { MATCH_ALL: "match_all", MATCH_SOME: "match_some" };
export const ThreadSearchTagSettingSets = obj;
