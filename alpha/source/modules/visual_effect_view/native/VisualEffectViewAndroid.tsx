// Module ID: 5369
// Function ID: 5370
// Name: VisualEffectViewAndroid
// Dependencies: [5067, 5367, 5368, 2]

// Module 5369 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5368 */;
import DeviceUtils from "DeviceUtils" /* 5067 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5367 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
