// Module ID: 1559
// Function ID: 17606
// Name: EMPTY_SAFE_AREA_INSETS
// Dependencies: []

// Module 1559 (EMPTY_SAFE_AREA_INSETS)
const obj = { "Bool(true)": "ERROR", "Bool(true)": "ERROR", "Bool(true)": "NOT_RESPONDER", "Bool(true)": "NOT_RESPONDER" };
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
export const META_QUEST_SAFE_AREA_INSETS = { "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006495229729197963, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000004667261458271638, "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000012270671132059365, "Bool(true)": 241505615215171200000000000000000000000000000000000000000000000000000000000000000000 };
export const INITIAL_SAFE_AREA_METRICS = initialWindowMetrics;
export const INITIAL_SAFE_AREA_INSETS = tmp4;
