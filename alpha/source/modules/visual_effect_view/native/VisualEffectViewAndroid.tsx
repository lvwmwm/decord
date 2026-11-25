// Module ID: 5585
// Function ID: 5586
// Name: VisualEffectViewAndroid
// Dependencies: [4969, 5583, 5584, 2]

// Module 5585 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5584 */;
import DeviceUtils from "DeviceUtils" /* 4969 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5583 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
