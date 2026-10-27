// Module ID: 17936
// Function ID: 17937
// Name: VisualEffectViewTarget
// Dependencies: [17, 1384, 17937, 2]

// Module 17936 (VisualEffectViewTarget)
import react_native from "react-native" /* 17 */;
import VisualEffectViewTargetAndroidNativeComponentDefault from "VisualEffectViewTargetAndroidNativeComponent" /* 17937 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = VisualEffectViewTargetAndroidNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
