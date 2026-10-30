// Module ID: 5600
// Function ID: 5601
// Name: VisualEffectViewAndroid
// Dependencies: [4966, 5598, 5599, 2]

// Module 5600 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5599 */;
import DeviceUtils from "DeviceUtils" /* 4966 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5598 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
