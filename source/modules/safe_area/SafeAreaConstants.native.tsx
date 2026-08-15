// Module ID: 1631
// Function ID: 1632
// Name: EMPTY_SAFE_AREA_INSETS
// Dependencies: [1632, 2]

// Module 1631 (EMPTY_SAFE_AREA_INSETS)
import { initialWindowMetrics } from "module_1632";

let insets;
if (initialWindowMetrics != null) {
  insets = initialWindowMetrics.insets;
}
const obj = { top: 0, bottom: 0, left: 0, right: 0 };
if (insets == null) {
  insets = obj;
}
const result = require("set").fileFinishedImporting("modules/safe_area/SafeAreaConstants.native.tsx");

export const EMPTY_SAFE_AREA_INSETS = obj;
export const META_QUEST_SAFE_AREA_INSETS = { top: 4, bottom: 4, left: 0, right: 0 };
export const INITIAL_SAFE_AREA_METRICS = initialWindowMetrics;
export const INITIAL_SAFE_AREA_INSETS = insets;
