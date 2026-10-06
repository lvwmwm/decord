// Module ID: 5275
// Function ID: 5276
// Name: VisualEffectViewAndroid
// Dependencies: [4813, 5273, 5274, 2]

// Module 5275 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5274 */;
import DeviceUtils from "DeviceUtils" /* 4813 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5273 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
