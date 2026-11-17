// Module ID: 5905
// Function ID: 5906
// Name: VisualEffectViewAndroid
// Dependencies: [5267, 5903, 5904, 2]

// Module 5905 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5904 */;
import DeviceUtils from "DeviceUtils" /* 5267 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5903 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
