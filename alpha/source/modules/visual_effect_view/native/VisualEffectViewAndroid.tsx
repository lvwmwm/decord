// Module ID: 5743
// Function ID: 5744
// Name: VisualEffectViewAndroid
// Dependencies: [5100, 5741, 5742, 2]

// Module 5743 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5742 */;
import DeviceUtils from "DeviceUtils" /* 5100 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5741 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
