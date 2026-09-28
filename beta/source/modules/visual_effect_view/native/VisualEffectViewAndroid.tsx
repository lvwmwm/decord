// Module ID: 5274
// Function ID: 5275
// Name: VisualEffectViewAndroid
// Dependencies: [4812, 5272, 5273, 2]

// Module 5274 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5273 */;
import DeviceUtils from "DeviceUtils" /* 4812 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5272 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
