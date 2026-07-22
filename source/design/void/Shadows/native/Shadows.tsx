// Module ID: 12922
// Function ID: 98524
// Name: generateBoxShadowStyle
// Dependencies: []
// Exports: generateBoxShadowStyle

// Module 12922 (generateBoxShadowStyle)
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
export const FOUR_DP_ELEVATION_SHADOW_PARAMS = { "Null": "0 0 4px 0 hsl(none 0% 0% / 0.08)", "Null": "drop-shadow(0 0 4px hsl(none 0% 0% / 0.08))", "Null": "cs", "Null": "20", "Null": null, "Null": "#000000", "Null": 0.08 };
export const EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS = {};
export const NO_ELEVATION_SHADOW_PARAMS = { "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null };
