// Module ID: 4946
// Function ID: 4947
// Name: set
// Dependencies: [2]

// Module 4946 (set)
import set from "set" /* 2 */;

const obj = { ALL: null, IS_ADULT: null };
let set = new Set([1]);
obj[0] = set;
obj[1] = new Set([1]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ContentRatingGOPClassification.tsx");

export const ContentRatingGOPClassification = { UNKNOWN_CLASSIFICATION: 0, [0]: "UNKNOWN_CLASSIFICATION", ADULT: 1, [1]: "ADULT" };
export const ContentRatingGOPClassificationSets = obj;
