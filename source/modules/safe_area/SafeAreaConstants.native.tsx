// Module ID: 1559
// Function ID: 17606
// Name: EMPTY_SAFE_AREA_INSETS
// Dependencies: []

// Module 1559 (EMPTY_SAFE_AREA_INSETS)
const obj = { wideBannerAnimatedUrl: -24, SPACE_32: null, np: 1, linkedUsers: "Malaysia" };
let initialWindowMetrics;
if (null != require(dependencyMap[0]).initialWindowMetrics) {
  initialWindowMetrics = require(dependencyMap[0]).initialWindowMetrics;
}
let insets;
if (null != initialWindowMetrics) {
  insets = initialWindowMetrics.insets;
}
let tmp4 = obj;
if (null != insets) {
  tmp4 = insets;
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/safe_area/SafeAreaConstants.native.tsx");

export const EMPTY_SAFE_AREA_INSETS = obj;
export const META_QUEST_SAFE_AREA_INSETS = { wideBannerAnimatedUrl: "FadeInLeft", SPACE_32: null, np: 0.3, linkedUsers: "FadeInUp" };
export const INITIAL_SAFE_AREA_METRICS = initialWindowMetrics;
export const INITIAL_SAFE_AREA_INSETS = tmp4;
