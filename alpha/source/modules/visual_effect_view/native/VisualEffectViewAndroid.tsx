// Module ID: 5267
// Function ID: 5268
// Name: VisualEffectViewAndroid
// Dependencies: [4808, 5265, 5266, 2]

// Module 5267 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5266 */;
import DeviceUtils from "DeviceUtils" /* 4808 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5265 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
