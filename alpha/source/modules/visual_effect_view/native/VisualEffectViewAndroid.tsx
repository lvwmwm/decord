// Module ID: 5728
// Function ID: 5729
// Name: VisualEffectViewAndroid
// Dependencies: [5098, 5726, 5727, 2]

// Module 5728 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5727 */;
import DeviceUtils from "DeviceUtils" /* 5098 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5726 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
