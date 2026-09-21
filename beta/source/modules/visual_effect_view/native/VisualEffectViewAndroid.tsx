// Module ID: 5181
// Function ID: 5182
// Name: VisualEffectViewAndroid
// Dependencies: [4737, 5179, 5180, 2]

// Module 5181 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5180 */;
import DeviceUtils from "DeviceUtils" /* 4737 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5179 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
