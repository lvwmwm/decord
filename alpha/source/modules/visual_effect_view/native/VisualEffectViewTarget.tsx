// Module ID: 17276
// Function ID: 17277
// Name: VisualEffectViewTarget
// Dependencies: [17, 1381, 17277, 2]

// Module 17276 (VisualEffectViewTarget)
import react_native from "react-native" /* 17 */;
import VisualEffectViewTargetAndroidNativeComponentDefault from "VisualEffectViewTargetAndroidNativeComponent" /* 17277 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = VisualEffectViewTargetAndroidNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
