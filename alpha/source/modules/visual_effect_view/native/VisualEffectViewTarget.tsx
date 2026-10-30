// Module ID: 18818
// Function ID: 18819
// Name: VisualEffectViewTarget
// Dependencies: [17, 1376, 18819, 2]

// Module 18818 (VisualEffectViewTarget)
import react_native from "react-native" /* 17 */;
import VisualEffectViewTargetAndroidNativeComponentDefault from "VisualEffectViewTargetAndroidNativeComponent" /* 18819 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = VisualEffectViewTargetAndroidNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
