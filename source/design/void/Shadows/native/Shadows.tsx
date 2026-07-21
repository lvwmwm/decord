// Module ID: 12913
// Function ID: 98469
// Name: generateBoxShadowStyle
// Dependencies: []
// Exports: generateBoxShadowStyle

// Module 12913 (generateBoxShadowStyle)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("design/void/Shadows/native/Shadows.tsx");

export const generateBoxShadowStyle = (arg0) => {
  let elevation;
  let shadowColorAndroid;
  let shadowColorIos;
  let shadowOpacity;
  let shadowRadius;
  let xOffset;
  let yOffset;
  ({ xOffset, yOffset, shadowColorIos, shadowOpacity, shadowRadius, elevation, shadowColorAndroid } = arg0);
  let obj = require(dependencyMap[0]);
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
export const EIGHT_DP_ELEVATION_SHADOW_PARAMS = {};
export const FOUR_DP_ELEVATION_SHADOW_PARAMS = { "Bool(false)": "0 0 4px 0 hsl(none 0% 0% / 0.08)", "Bool(false)": "drop-shadow(0 0 4px hsl(none 0% 0% / 0.08))", "Bool(false)": "cs", "Bool(false)": "20", "Bool(false)": null, "Bool(false)": "#000000", "Bool(false)": 0.08 };
export const EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS = { "Bool(false)": "isArray", "Bool(false)": "construct", "Bool(false)": "isArray", "Bool(false)": "context", "Bool(false)": "keys", "Bool(false)": "isArray", "Bool(false)": "Text" };
export const NO_ELEVATION_SHADOW_PARAMS = {};
