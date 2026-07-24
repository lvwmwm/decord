// Module ID: 688
// Function ID: 8474
// Name: unsafe_getRawColor
// Dependencies: [689, 2]
// Exports: getRadii, getThemes, unsafe_getRawColor, unsafe_getResolvedRawColor

// Module 688 (unsafe_getRawColor)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/tokens/shims.native.tsx");

export const unsafe_getRawColor = function unsafe_getRawColor(RED_400) {
  return importDefault(689).unsafe_rawColors[RED_400];
};
export const unsafe_getResolvedRawColor = function unsafe_getResolvedRawColor(BRAND_500, saturation) {
  const internal = importDefault(689).internal;
  return internal.adjustColorSaturation(importDefault(689).unsafe_rawColors[BRAND_500], saturation.saturation, "generic");
};
export const getThemes = function getThemes() {
  return importDefault(689).themes;
};
export const getRadii = function getRadii() {
  return importDefault(689).radii;
};
