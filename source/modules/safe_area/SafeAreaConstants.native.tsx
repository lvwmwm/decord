// Module ID: 1559
// Function ID: 17608
// Name: EMPTY_SAFE_AREA_INSETS
// Dependencies: [1560, 2]

// Module 1559 (EMPTY_SAFE_AREA_INSETS)
const obj = { top: 0, bottom: 0, left: 0, right: 0 };
let initialWindowMetrics;
if (null != require("module_1560").initialWindowMetrics) {
  initialWindowMetrics = require("module_1560").initialWindowMetrics;
}
let insets;
if (null != initialWindowMetrics) {
  insets = initialWindowMetrics.insets;
}
let tmp4 = obj;
if (null != insets) {
  tmp4 = insets;
}
const result = require("set").fileFinishedImporting("modules/safe_area/SafeAreaConstants.native.tsx");

export const EMPTY_SAFE_AREA_INSETS = obj;
export const META_QUEST_SAFE_AREA_INSETS = { top: 4, bottom: 4, left: 0, right: 0 };
export const INITIAL_SAFE_AREA_METRICS = initialWindowMetrics;
export const INITIAL_SAFE_AREA_INSETS = tmp4;
