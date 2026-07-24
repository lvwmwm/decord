// Module ID: 13088
// Function ID: 101003
// Name: generateBoxShadowStyle
// Dependencies: [477, 2]
// Exports: generateBoxShadowStyle

// Module 13088 (generateBoxShadowStyle)
const result = require("set").fileFinishedImporting("design/void/Shadows/native/Shadows.tsx");

export const generateBoxShadowStyle = (arg0) => {
  let elevation;
  let shadowColorAndroid;
  let shadowColorIos;
  let shadowOpacity;
  let shadowRadius;
  let xOffset;
  let yOffset;
  ({ xOffset, yOffset, shadowColorIos, shadowOpacity, shadowRadius, elevation, shadowColorAndroid } = arg0);
  let obj = require(477) /* set */;
  obj = {};
  if (obj.isAndroid()) {
    obj.elevation = elevation;
    obj.shadowColor = shadowColorAndroid;
  } else {
    obj = { shadowColor: shadowColorIos, width: xOffset, height: yOffset };
    obj.shadowOffset = obj;
    obj.shadowOpacity = shadowOpacity;
    obj.shadowRadius = shadowRadius;
  }
  return obj;
};
export const EIGHT_DP_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 4, shadowColorIos: "#000000", shadowOpacity: 0.3, shadowRadius: 4.65, elevation: 8, shadowColorAndroid: "#000000" };
export const FOUR_DP_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 2, shadowColorIos: "#000000", shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, shadowColorAndroid: "#000000" };
export const EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 7, shadowColorIos: "#000", shadowOpacity: 0.36, shadowRadius: 9.51, elevation: 15, shadowColorAndroid: "#000" };
export const NO_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 0, shadowColorIos: "#000", shadowOpacity: 0, shadowRadius: 0, elevation: 0, shadowColorAndroid: "#000" };
