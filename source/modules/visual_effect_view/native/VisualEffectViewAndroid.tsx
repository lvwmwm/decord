// Module ID: 4772
// Function ID: 4773
// Name: MODERN_ANDROID_BLURRING_AVAILABLE
// Dependencies: [4322, 4770, 4771, 2]

// Module 4772 (MODERN_ANDROID_BLURRING_AVAILABLE)
import DCDDeviceManager from "DCDDeviceManager";
import importDefaultResult from "map";

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
const tmp2 = DCDDeviceManager.getSystemVersionMajor() >= 31;
obj[1] = require("__INTERNAL_VIEW_CONFIG");
const importDefaultResultResult = require("map")(obj);
const result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
