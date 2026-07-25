// Module ID: 4539
// Function ID: 39841
// Name: MODERN_ANDROID_BLURRING_AVAILABLE
// Dependencies: [4111, 4537, 4538, 2]

// Module 4539 (MODERN_ANDROID_BLURRING_AVAILABLE)
import getSystemVersion from "getSystemVersion";
import importDefaultResult from "map";

const obj = { componentName: "DCDVisualEffectView" };
const tmp2 = getSystemVersion.getSystemVersionMajor() >= 31;
obj.componentFoundInstance = require("__INTERNAL_VIEW_CONFIG");
const importDefaultResultResult = require("map")(obj);
const result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
