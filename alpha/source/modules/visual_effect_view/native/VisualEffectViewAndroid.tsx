// Module ID: 5627
// Function ID: 5628
// Name: VisualEffectViewAndroid
// Dependencies: [4961, 5625, 5626, 2]

// Module 5627 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5626 */;
import DeviceUtils from "DeviceUtils" /* 4961 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5625 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
