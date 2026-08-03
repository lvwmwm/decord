// Module ID: 4661
// Function ID: 4662
// Name: MODERN_ANDROID_BLURRING_AVAILABLE
// Dependencies: [4235, 4659, 4660, 2]

// Module 4661 (MODERN_ANDROID_BLURRING_AVAILABLE)
import DCDDeviceManager from "DCDDeviceManager";
import importDefaultResult from "map";

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
const tmp2 = DCDDeviceManager.getSystemVersionMajor() >= 31;
obj[1] = require("__INTERNAL_VIEW_CONFIG");
const importDefaultResultResult = require("map")(obj);
const result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
