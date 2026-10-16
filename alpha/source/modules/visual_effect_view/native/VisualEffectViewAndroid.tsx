// Module ID: 5433
// Function ID: 5434
// Name: VisualEffectViewAndroid
// Dependencies: [5130, 5431, 5432, 2]

// Module 5433 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5432 */;
import DeviceUtils from "DeviceUtils" /* 5130 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5431 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
