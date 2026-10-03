// Module ID: 16950
// Function ID: 16951
// Name: VisualEffectViewTarget
// Dependencies: [17, 1369, 16951, 2]

// Module 16950 (VisualEffectViewTarget)
import react_native from "react-native" /* 17 */;
import VisualEffectViewTargetAndroidNativeComponentDefault from "VisualEffectViewTargetAndroidNativeComponent" /* 16951 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = VisualEffectViewTargetAndroidNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
