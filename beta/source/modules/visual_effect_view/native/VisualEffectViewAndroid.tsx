// Module ID: 5211
// Function ID: 5212
// Name: VisualEffectViewAndroid
// Dependencies: [4767, 5209, 5210, 2]

// Module 5211 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5210 */;
import DeviceUtils from "DeviceUtils" /* 4767 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5209 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
