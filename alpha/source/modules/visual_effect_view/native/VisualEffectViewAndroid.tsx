// Module ID: 5735
// Function ID: 5736
// Name: VisualEffectViewAndroid
// Dependencies: [5099, 5733, 5734, 2]

// Module 5735 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5734 */;
import DeviceUtils from "DeviceUtils" /* 5099 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5733 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
