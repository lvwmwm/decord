// Module ID: 5605
// Function ID: 5606
// Name: VisualEffectViewAndroid
// Dependencies: [4971, 5603, 5604, 2]

// Module 5605 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5604 */;
import DeviceUtils from "DeviceUtils" /* 4971 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5603 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
