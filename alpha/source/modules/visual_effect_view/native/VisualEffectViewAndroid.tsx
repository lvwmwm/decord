// Module ID: 5616
// Function ID: 5617
// Name: VisualEffectViewAndroid
// Dependencies: [5000, 5614, 5615, 2]

// Module 5616 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5615 */;
import DeviceUtils from "DeviceUtils" /* 5000 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5614 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
