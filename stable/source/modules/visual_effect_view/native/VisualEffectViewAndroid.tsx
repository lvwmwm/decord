// Module ID: 5623
// Function ID: 5624
// Name: VisualEffectViewAndroid
// Dependencies: [4960, 5621, 5622, 2]

// Module 5623 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5622 */;
import DeviceUtils from "DeviceUtils" /* 4960 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5621 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
