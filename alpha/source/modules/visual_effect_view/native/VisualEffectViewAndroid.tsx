// Module ID: 5573
// Function ID: 5574
// Name: VisualEffectViewAndroid
// Dependencies: [4923, 5571, 5572, 2]

// Module 5573 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5572 */;
import DeviceUtils from "DeviceUtils" /* 4923 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5571 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
