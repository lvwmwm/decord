// Module ID: 6158
// Function ID: 55079
// Name: ALLOWED_TYPES
// Dependencies: [6145, 2]
// Exports: isAllowedType

// Module 6158 (ALLOWED_TYPES)
const items = [require("sortByMatchScore").AutocompleterResultTypes.USER, require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL, require("sortByMatchScore").AutocompleterResultTypes.VOICE_CHANNEL, require("sortByMatchScore").AutocompleterResultTypes.GROUP_DM];
const arr = Array.from(items);
const result = require("set").fileFinishedImporting("modules/share/ShareConstants.tsx");

export const ALLOWED_TYPES = arr;
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
