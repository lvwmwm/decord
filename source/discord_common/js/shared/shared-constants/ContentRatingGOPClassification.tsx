// Module ID: 6873
// Function ID: 54367
// Name: set
// Dependencies: [2]

// Module 6873 (set)
import set from "set";

const obj = {};
let set = new Set([1]);
obj.ALL = set;
obj.IS_ADULT = new Set([1]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ContentRatingGOPClassification.tsx");

export const ContentRatingGOPClassification = { UNKNOWN_CLASSIFICATION: 0, [0]: "UNKNOWN_CLASSIFICATION", ADULT: 1, [1]: "ADULT" };
export const ContentRatingGOPClassificationSets = obj;
