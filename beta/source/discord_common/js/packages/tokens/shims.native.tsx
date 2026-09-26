// Module ID: 575
// Function ID: 576
// Name: shims
// Dependencies: [576, 2]
// Exports: getRadii, getThemes, unsafe_getRawColor, unsafe_getResolvedRawColor

// Module 575 (shims)
import nativeDefault from "native" /* 576 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/tokens/shims.native.tsx");

export const unsafe_getRawColor = function unsafe_getRawColor(RED_400) {
  return nativeDefault.unsafe_rawColors[RED_400];
};
export const unsafe_getResolvedRawColor = function unsafe_getResolvedRawColor(BRAND_500, saturation) {
  const internal = nativeDefault.internal;
  return internal.adjustColorSaturation(nativeDefault.unsafe_rawColors[BRAND_500], saturation.saturation, "generic");
};
export const getThemes = function getThemes() {
  return nativeDefault.themes;
};
export const getRadii = function getRadii() {
  return nativeDefault.radii;
};
