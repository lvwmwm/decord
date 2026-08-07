// Module ID: 4707
// Function ID: 4708
// Name: MODERN_ANDROID_BLURRING_AVAILABLE
// Dependencies: [4282, 4705, 4706, 2]

// Module 4707 (MODERN_ANDROID_BLURRING_AVAILABLE)
import DCDDeviceManager from "DCDDeviceManager";
import importDefaultResult from "map";

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
const tmp2 = DCDDeviceManager.getSystemVersionMajor() >= 31;
obj[1] = require("__INTERNAL_VIEW_CONFIG");
const importDefaultResultResult = require("map")(obj);
const result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
