// Module ID: 5647
// Function ID: 48284
// Name: set
// Dependencies: [2]

// Module 5647 (set)
import set from "set";

const obj = {};
let set = new Set([1]);
obj.ALL = set;
obj.IS_ADULT = new Set([1]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ContentRatingGOPClassification.tsx");

export const ContentRatingGOPClassification = { UNKNOWN_CLASSIFICATION: 0, [0]: "UNKNOWN_CLASSIFICATION", ADULT: 1, [1]: "ADULT" };
export const ContentRatingGOPClassificationSets = obj;
