// Module ID: 5741
// Function ID: 5742
// Name: VisualEffectViewAndroid
// Dependencies: [5098, 5739, 5740, 2]

// Module 5741 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5740 */;
import DeviceUtils from "DeviceUtils" /* 5098 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5739 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
