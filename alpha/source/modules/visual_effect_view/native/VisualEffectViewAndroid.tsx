// Module ID: 5370
// Function ID: 5371
// Name: VisualEffectViewAndroid
// Dependencies: [5068, 5368, 5369, 2]

// Module 5370 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5369 */;
import DeviceUtils from "DeviceUtils" /* 5068 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5368 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
