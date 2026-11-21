// Module ID: 5486
// Function ID: 5487
// Name: VisualEffectViewAndroid
// Dependencies: [4870, 5484, 5485, 2]

// Module 5486 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5485 */;
import DeviceUtils from "DeviceUtils" /* 4870 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5484 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
