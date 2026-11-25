// Module ID: 19057
// Function ID: 19058
// Name: VisualEffectViewTarget
// Dependencies: [17, 1378, 19058, 2]

// Module 19057 (VisualEffectViewTarget)
import react_native from "react-native" /* 17 */;
import VisualEffectViewTargetAndroidNativeComponentDefault from "VisualEffectViewTargetAndroidNativeComponent" /* 19058 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = VisualEffectViewTargetAndroidNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
