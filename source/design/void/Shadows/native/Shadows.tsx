// Module ID: 12915
// Function ID: 98491
// Name: generateBoxShadowStyle
// Dependencies: []
// Exports: generateBoxShadowStyle

// Module 12915 (generateBoxShadowStyle)
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
export const EIGHT_DP_ELEVATION_SHADOW_PARAMS = { mn: "<string:2754674692>", messageId: "<string:3607772528>", accessibilityRole: "<string:1916780707>", Error: "Date", duration: "isArray", width: "<string:72047169>", height: "<string:1279803904>" };
export const FOUR_DP_ELEVATION_SHADOW_PARAMS = { mn: "0 0 4px 0 hsl(none 0% 0% / 0.08)", messageId: "drop-shadow(0 0 4px hsl(none 0% 0% / 0.08))", accessibilityRole: "cs", Error: "20", duration: null, width: "#000000", height: 0.08 };
export const EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS = {};
export const NO_ELEVATION_SHADOW_PARAMS = {};
