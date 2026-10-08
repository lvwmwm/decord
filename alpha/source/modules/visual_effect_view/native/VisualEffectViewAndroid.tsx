// Module ID: 5368
// Function ID: 5369
// Name: VisualEffectViewAndroid
// Dependencies: [5066, 5366, 5367, 2]

// Module 5368 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5367 */;
import DeviceUtils from "DeviceUtils" /* 5066 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5366 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
