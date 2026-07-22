// Module ID: 7102
// Function ID: 57100
// Name: ALLOWED_TYPES
// Dependencies: []
// Exports: isAllowedType

// Module 7102 (ALLOWED_TYPES)
const items = [require(dependencyMap[0]).AutocompleterResultTypes.USER, require(dependencyMap[0]).AutocompleterResultTypes.TEXT_CHANNEL, require(dependencyMap[0]).AutocompleterResultTypes.VOICE_CHANNEL, require(dependencyMap[0]).AutocompleterResultTypes.GROUP_DM];
const arr = Array.from(items);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/share/ShareConstants.tsx");

export const ALLOWED_TYPES = arr;
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
