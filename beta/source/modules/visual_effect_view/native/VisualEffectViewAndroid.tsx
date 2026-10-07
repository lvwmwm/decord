// Module ID: 5778
// Function ID: 5779
// Name: VisualEffectViewAndroid
// Dependencies: [4866, 5776, 5777, 2]

// Module 5778 (VisualEffectViewAndroid)
import VisualEffectViewNativeComponentDefault from "VisualEffectViewNativeComponent" /* 5777 */;
import DeviceUtils from "DeviceUtils" /* 4866 */;
import requireNativeComponentOrDefault from "requireNativeComponentOrDefault" /* 5776 */;
import size from "module_2" /* 2 */;

const obj = { componentName: "DCDVisualEffectView", componentFoundInstance: VisualEffectViewNativeComponentDefault };
const tmp2 = DeviceUtils.getSystemVersionMajor() >= 31;
const importDefaultResultResult = requireNativeComponentOrDefault(obj);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewAndroid.tsx");

export default importDefaultResultResult;
export const MODERN_ANDROID_BLURRING_AVAILABLE = tmp2;
