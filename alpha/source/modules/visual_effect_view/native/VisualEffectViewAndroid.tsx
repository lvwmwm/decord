// Module ID: 5365
// Function ID: 5366
// Name: VisualEffectViewAndroid
// Dependencies: [4749, 5363, 5364, 2]

// Module 5365 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5364 */;
import DeviceUtils from "DeviceUtils" /* 4749 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5363 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
