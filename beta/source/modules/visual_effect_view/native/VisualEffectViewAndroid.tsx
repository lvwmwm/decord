// Module ID: 5213
// Function ID: 5214
// Name: VisualEffectViewAndroid
// Dependencies: [4769, 5211, 5212, 2]

// Module 5213 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5212 */;
import DeviceUtils from "DeviceUtils" /* 4769 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5211 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
