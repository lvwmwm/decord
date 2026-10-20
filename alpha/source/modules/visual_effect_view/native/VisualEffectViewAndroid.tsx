// Module ID: 5552
// Function ID: 5553
// Name: VisualEffectViewAndroid
// Dependencies: [4902, 5550, 5551, 2]

// Module 5552 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5551 */;
import DeviceUtils from "DeviceUtils" /* 4902 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5550 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
