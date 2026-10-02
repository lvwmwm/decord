// Module ID: 587
// Function ID: 588
// Name: shims
// Dependencies: [588, 2]
// Exports: getRadii, getThemes, unsafe_getRawColor, unsafe_getResolvedRawColor

// Module 587 (shims)
import nativeDefault from "native" /* 588 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/tokens/shims.native.tsx");

export const unsafe_getRawColor = function unsafe_getRawColor(RED_400) {
  return nativeDefault.unsafe_rawColors[RED_400];
};
export const unsafe_getResolvedRawColor = function unsafe_getResolvedRawColor(PRIMARY_530, saturation) {
  const internal = nativeDefault.internal;
  return internal.adjustColorSaturation(nativeDefault.unsafe_rawColors[PRIMARY_530], saturation.saturation, "generic");
};
export const getThemes = function getThemes() {
  return nativeDefault.themes;
};
export const getRadii = function getRadii() {
  return nativeDefault.radii;
};
