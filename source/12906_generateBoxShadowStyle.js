// Module ID: 12906
// Function ID: 98446
// Name: generateBoxShadowStyle
// Dependencies: []
// Exports: generateBoxShadowStyle

// Module 12906 (generateBoxShadowStyle)
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
export const EIGHT_DP_ELEVATION_SHADOW_PARAMS = { <string:89242260>: false, <string:2700829578>: false, <string:1868517861>: false, <string:592677473>: false, <string:3314374545>: false, "Bool(true)": false, "Bool(true)": false };
export const FOUR_DP_ELEVATION_SHADOW_PARAMS = { <string:89242260>: "0 0 4px 0 hsl(none 0% 0% / 0.08)", <string:2700829578>: "drop-shadow(0 0 4px hsl(none 0% 0% / 0.08))", <string:1868517861>: "cs", <string:592677473>: "20", <string:3314374545>: null, "Bool(true)": "#000000", "Bool(true)": 0.08 };
export const EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS = { <string:89242260>: null, <string:2700829578>: null, <string:1868517861>: null, <string:592677473>: null, <string:3314374545>: null, "Bool(true)": null, "Bool(true)": null };
export const NO_ELEVATION_SHADOW_PARAMS = {};
