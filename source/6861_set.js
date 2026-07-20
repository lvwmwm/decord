// Module ID: 6861
// Function ID: 54298
// Name: set
// Dependencies: []

// Module 6861 (set)
const obj = { ALL: new Set(["clock", "eleven", "o\u2019clock", "time", false, false]) };
const set = new Set(["clock", "eleven", "o\u2019clock", "time", false, false]);
obj.IS_ADULT_ONLY = new Set([true]);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/ContentRatingESRBRating.tsx");

export const ContentRatingESRBRating = { UNKNOWN_RATING: 0, [0]: "UNKNOWN_RATING", EVERYONE: 1, [1]: "EVERYONE", EVERYONE_TEN_PLUS: 2, [2]: "EVERYONE_TEN_PLUS", TEEN: 3, [3]: "TEEN", MATURE: 4, [4]: "MATURE", ADULTS_ONLY: 5, [5]: "ADULTS_ONLY", RATING_PENDING: 6, [6]: "RATING_PENDING" };
export const ContentRatingESRBRatingSets = obj;
