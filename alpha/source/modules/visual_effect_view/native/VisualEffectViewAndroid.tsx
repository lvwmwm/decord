// Module ID: 5264
// Function ID: 5265
// Name: VisualEffectViewAndroid
// Dependencies: [4806, 5262, 5263, 2]

// Module 5264 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5263 */;
import DeviceUtils from "DeviceUtils" /* 4806 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5262 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
