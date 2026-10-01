// Module ID: 10640
// Function ID: 10641
// Name: ShareConstants
// Dependencies: [9485, 2]
// Exports: isAllowedType

// Module 10640 (ShareConstants)
import sortByMatchScore from "sortByMatchScore" /* 9485 */;
import size from "module_2" /* 2 */;

const items = [sortByMatchScore.AutocompleterResultTypes.USER, sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL, sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL, sortByMatchScore.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
