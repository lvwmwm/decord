// Module ID: 16619
// Function ID: 16620
// Name: VisualEffectViewTarget
// Dependencies: [17, 1370, 16620, 2]

// Module 16619 (VisualEffectViewTarget)
import react_native from "react-native" /* 17 */;
import VisualEffectViewTargetAndroidNativeComponentDefault from "VisualEffectViewTargetAndroidNativeComponent" /* 16620 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = VisualEffectViewTargetAndroidNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
