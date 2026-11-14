// Module ID: 5911
// Function ID: 5912
// Name: VisualEffectViewAndroid
// Dependencies: [5263, 5909, 5910, 2]

// Module 5911 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5910 */;
import DeviceUtils from "DeviceUtils" /* 5263 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5909 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
