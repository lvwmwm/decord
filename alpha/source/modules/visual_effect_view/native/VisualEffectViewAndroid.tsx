// Module ID: 5470
// Function ID: 5471
// Name: VisualEffectViewAndroid
// Dependencies: [4842, 5468, 5469, 2]

// Module 5470 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5469 */;
import DeviceUtils from "DeviceUtils" /* 4842 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5468 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: null };
obj.componentFoundInstance = VisualEffectViewNativeComponentDefault;
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default requireNativeComponentOrDefault(obj);
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
