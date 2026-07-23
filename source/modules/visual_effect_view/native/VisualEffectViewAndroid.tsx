// Module ID: 4538
// Function ID: 39829
// Name: MODERN_ANDROID_BLURRING_AVAILABLE
// Dependencies: [4110, 4536, 4537, 2]

// Module 4538 (MODERN_ANDROID_BLURRING_AVAILABLE)
import getSystemVersion from "getSystemVersion";
import importDefaultResult from "map";

const obj = { componentName: "DCDVisualEffectView" };
const tmp2 = getSystemVersion.getSystemVersionMajor() >= 31;
obj.componentFoundInstance = require("__INTERNAL_VIEW_CONFIG");
const importDefaultResultResult = require("map")(obj);
const result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
