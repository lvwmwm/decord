// Module ID: 5430
// Function ID: 5431
// Name: VisualEffectViewAndroid
// Dependencies: [5127, 5428, 5429, 2]

// Module 5430 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5429 */;
import DeviceUtils from "DeviceUtils" /* 5127 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5428 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
