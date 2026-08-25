// Module ID: 7465
// Function ID: 7466
// Name: ALLOWED_TYPES
// Dependencies: [7452, 2]
// Exports: isAllowedType

// Module 7465 (ALLOWED_TYPES)
import set from "set" /* 2 */;
import sortByMatchScore from "sortByMatchScore" /* 7452 */;

const items = [sortByMatchScore.AutocompleterResultTypes.USER, sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL, sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL, sortByMatchScore.AutocompleterResultTypes.GROUP_DM];
const arr = Array.from(items);
const result = set.fileFinishedImporting("modules/share/ShareConstants.tsx");

export const ALLOWED_TYPES = arr;
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
