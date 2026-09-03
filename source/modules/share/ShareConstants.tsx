// Module ID: 10944
// Function ID: 10945
// Name: ALLOWED_TYPES
// Dependencies: [9950, 2]
// Exports: isAllowedType

// Module 10944 (ALLOWED_TYPES)
import set from "set" /* 2 */;
import sortByMatchScore from "sortByMatchScore" /* 9950 */;

const items = [sortByMatchScore.AutocompleterResultTypes.USER, sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL, sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL, sortByMatchScore.AutocompleterResultTypes.GROUP_DM];
const arr = Array.from(items);
const result = set.fileFinishedImporting("modules/share/ShareConstants.tsx");

export const ALLOWED_TYPES = arr;
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
