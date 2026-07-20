// Module ID: 688
// Function ID: 8469
// Name: unsafe_getRawColor
// Dependencies: []
// Exports: getRadii, getThemes, unsafe_getRawColor, unsafe_getResolvedRawColor

// Module 688 (unsafe_getRawColor)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/tokens/shims.native.tsx");

export const unsafe_getRawColor = function unsafe_getRawColor(RED_400) {
  return importDefault(dependencyMap[0]).unsafe_rawColors[RED_400];
};
export const unsafe_getResolvedRawColor = function unsafe_getResolvedRawColor(BRAND_500, saturation) {
  const internal = importDefault(dependencyMap[0]).internal;
  return internal.adjustColorSaturation(importDefault(dependencyMap[0]).unsafe_rawColors[BRAND_500], saturation.saturation, "generic");
};
export const getThemes = function getThemes() {
  return importDefault(dependencyMap[0]).themes;
};
export const getRadii = function getRadii() {
  return importDefault(dependencyMap[0]).radii;
};
