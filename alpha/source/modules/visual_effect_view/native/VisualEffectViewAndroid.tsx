// Module ID: 5785
// Function ID: 5786
// Name: VisualEffectViewAndroid
// Dependencies: [4872, 5783, 5784, 2]

// Module 5785 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5784 */;
import DeviceUtils from "DeviceUtils" /* 4872 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5783 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
