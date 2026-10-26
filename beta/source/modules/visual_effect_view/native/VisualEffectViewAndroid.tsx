// Module ID: 5591
// Function ID: 5592
// Name: VisualEffectViewAndroid
// Dependencies: [4928, 5589, 5590, 2]

// Module 5591 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5590 */;
import DeviceUtils from "DeviceUtils" /* 4928 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5589 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
