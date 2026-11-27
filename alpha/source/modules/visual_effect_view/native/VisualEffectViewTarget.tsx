// Module ID: 19136
// Function ID: 19137
// Name: VisualEffectViewTarget
// Dependencies: [17, 1379, 19137, 2]

// Module 19136 (VisualEffectViewTarget)
import react_native from "react-native" /* 17 */;
import VisualEffectViewTargetAndroidNativeComponentDefault from "VisualEffectViewTargetAndroidNativeComponent" /* 19137 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = VisualEffectViewTargetAndroidNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
