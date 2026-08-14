// Module ID: 7388
// Function ID: 7389
// Name: ALLOWED_TYPES
// Dependencies: [7375, 2]
// Exports: isAllowedType

// Module 7388 (ALLOWED_TYPES)
const items = [require("sortByMatchScore").AutocompleterResultTypes.USER, require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL, require("sortByMatchScore").AutocompleterResultTypes.VOICE_CHANNEL, require("sortByMatchScore").AutocompleterResultTypes.GROUP_DM];
const arr = Array.from(items);
const result = require("set").fileFinishedImporting("modules/share/ShareConstants.tsx");

export const ALLOWED_TYPES = arr;
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
