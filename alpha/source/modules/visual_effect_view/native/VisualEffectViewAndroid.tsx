// Module ID: 5396
// Function ID: 5397
// Name: VisualEffectViewAndroid
// Dependencies: [4780, 5394, 5395, 2]

// Module 5396 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5395 */;
import DeviceUtils from "DeviceUtils" /* 4780 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5394 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
