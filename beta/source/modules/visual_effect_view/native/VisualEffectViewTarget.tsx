// Module ID: 19639
// Function ID: 19640
// Name: VisualEffectViewTarget
// Dependencies: [17, 1380, 19640, 2]

// Module 19639 (VisualEffectViewTarget)
import react_native from "react-native" /* 17 */;
import VisualEffectViewTargetAndroidNativeComponentDefault from "VisualEffectViewTargetAndroidNativeComponent" /* 19640 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = VisualEffectViewTargetAndroidNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
