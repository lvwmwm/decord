// Module ID: 5577
// Function ID: 5578
// Name: VisualEffectViewAndroid
// Dependencies: [4926, 5575, 5576, 2]

// Module 5577 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5576 */;
import DeviceUtils from "DeviceUtils" /* 4926 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5575 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
