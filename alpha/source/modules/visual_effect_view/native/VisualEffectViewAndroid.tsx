// Module ID: 5440
// Function ID: 5441
// Name: VisualEffectViewAndroid
// Dependencies: [4812, 5438, 5439, 2]

// Module 5440 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5439 */;
import DeviceUtils from "DeviceUtils" /* 4812 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5438 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
