// Module ID: 7644
// Function ID: 7645
// Name: ALLOWED_TYPES
// Dependencies: [7631, 2]
// Exports: isAllowedType

// Module 7644 (ALLOWED_TYPES)
import set from "set" /* 2 */;
import sortByMatchScore from "sortByMatchScore" /* 7631 */;

const items = [sortByMatchScore.AutocompleterResultTypes.USER, sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL, sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL, sortByMatchScore.AutocompleterResultTypes.GROUP_DM];
const arr = Array.from(items);
const result = set.fileFinishedImporting("modules/share/ShareConstants.tsx");

export const ALLOWED_TYPES = arr;
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
