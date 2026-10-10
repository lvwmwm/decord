// Module ID: 14197
// Function ID: 14198
// Name: Shadows
// Dependencies: [1382, 2]
// Exports: generateBoxShadowStyle

// Module 14197 (Shadows)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("design/void/Shadows/native/Shadows.tsx");

export const generateBoxShadowStyle = (arg0) => {
  let elevation;
  let obj3;
  let shadowColorAndroid;
  let shadowColorIos;
  let shadowOpacity;
  let shadowRadius;
  let xOffset;
  let yOffset;
  ({ xOffset, yOffset, shadowColorIos, shadowOpacity, shadowRadius, elevation, shadowColorAndroid } = arg0);
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    obj3 = { elevation, shadowColor: shadowColorAndroid };
    const obj2 = { elevation, shadowColor: shadowColorAndroid };
  } else {
    obj3 = { shadowColor: shadowColorIos, shadowOffset: size, shadowOpacity, shadowRadius };
    size = { width: xOffset, height: yOffset };
  }
  return obj3;
};
export const EIGHT_DP_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 4, shadowColorIos: "#000000", shadowOpacity: 0.3, shadowRadius: 4.65, elevation: 8, shadowColorAndroid: "#000000" };
export const FOUR_DP_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 2, shadowColorIos: "#000000", shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, shadowColorAndroid: "#000000" };
export const EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 7, shadowColorIos: "#000", shadowOpacity: 0.36, shadowRadius: 9.51, elevation: 15, shadowColorAndroid: "#000" };
export const NO_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 0, shadowColorIos: "#000", shadowOpacity: 0, shadowRadius: 0, elevation: 0, shadowColorAndroid: "#000" };
