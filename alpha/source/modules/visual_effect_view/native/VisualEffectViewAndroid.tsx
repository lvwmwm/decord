// Module ID: 5628
// Function ID: 5629
// Name: VisualEffectViewAndroid
// Dependencies: [4962, 5626, 5627, 2]

// Module 5628 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5627 */;
import DeviceUtils from "DeviceUtils" /* 4962 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5626 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
