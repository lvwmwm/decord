// Module ID: 5490
// Function ID: 5491
// Name: VisualEffectViewAndroid
// Dependencies: [4874, 5488, 5489, 2]

// Module 5490 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5489 */;
import DeviceUtils from "DeviceUtils" /* 4874 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5488 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
