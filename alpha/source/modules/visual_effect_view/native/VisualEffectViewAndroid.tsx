// Module ID: 5432
// Function ID: 5433
// Name: VisualEffectViewAndroid
// Dependencies: [5130, 5430, 5431, 2]

// Module 5432 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5431 */;
import DeviceUtils from "DeviceUtils" /* 5130 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5430 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
