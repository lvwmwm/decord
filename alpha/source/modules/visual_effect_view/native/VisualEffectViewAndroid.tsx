// Module ID: 5367
// Function ID: 5368
// Name: VisualEffectViewAndroid
// Dependencies: [4751, 5365, 5366, 2]

// Module 5367 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5366 */;
import DeviceUtils from "DeviceUtils" /* 4751 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5365 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
