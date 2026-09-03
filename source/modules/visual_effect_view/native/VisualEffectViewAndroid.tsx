// Module ID: 4924
// Function ID: 4925
// Name: MODERN_ANDROID_BLURRING_AVAILABLE
// Dependencies: [4457, 4922, 4923, 2]

// Module 4924 (MODERN_ANDROID_BLURRING_AVAILABLE)
import set from "set" /* 2 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 4923 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4457 */;
import importDefaultResult from "map" /* 4922 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
const tmp2 = DCDDeviceManager.getSystemVersionMajor() >= 31;
obj[1] = __INTERNAL_VIEW_CONFIGDefault;
const importDefaultResultResult = importDefaultResult(obj);
const result = set.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
