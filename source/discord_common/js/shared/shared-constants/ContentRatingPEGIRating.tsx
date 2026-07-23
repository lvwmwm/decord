// Module ID: 6872
// Function ID: 54366
// Name: set
// Dependencies: [2]

// Module 6872 (set)
import set from "set";

const obj = {};
let set = new Set([1, 2, 3, 4, 5]);
obj.ALL = set;
obj.IS_ADULT_ONLY = new Set([]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ContentRatingPEGIRating.tsx");

export const ContentRatingPEGIRating = { UNKNOWN_RATING: 0, [0]: "UNKNOWN_RATING", THREE: 1, [1]: "THREE", SEVEN: 2, [2]: "SEVEN", TWELVE: 3, [3]: "TWELVE", SIXTEEN: 4, [4]: "SIXTEEN", EIGHTEEN: 5, [5]: "EIGHTEEN" };
export const ContentRatingPEGIRatingSets = obj;
