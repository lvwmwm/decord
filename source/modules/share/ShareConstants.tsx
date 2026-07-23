// Module ID: 7107
// Function ID: 57134
// Name: ALLOWED_TYPES
// Dependencies: [7094, 2]
// Exports: isAllowedType

// Module 7107 (ALLOWED_TYPES)
const items = [require("sortByMatchScore").AutocompleterResultTypes.USER, require("sortByMatchScore").AutocompleterResultTypes.TEXT_CHANNEL, require("sortByMatchScore").AutocompleterResultTypes.VOICE_CHANNEL, require("sortByMatchScore").AutocompleterResultTypes.GROUP_DM];
const arr = Array.from(items);
const result = require("set").fileFinishedImporting("modules/share/ShareConstants.tsx");

export const ALLOWED_TYPES = arr;
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
