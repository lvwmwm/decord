// Module ID: 5848
// Function ID: 5849
// Name: VisualEffectViewAndroid
// Dependencies: [5200, 5846, 5847, 2]

// Module 5848 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5847 */;
import DeviceUtils from "DeviceUtils" /* 5200 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5846 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
