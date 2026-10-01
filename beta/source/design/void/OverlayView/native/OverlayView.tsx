// Module ID: 5210
// Function ID: 5211
// Name: OverlayView
// Dependencies: [19, 17, 21, 1364, 5211, 5260, 2]
// Exports: TransitionGroupOverlayView

// Module 5210 (OverlayView)
import Fragment from "Fragment" /* 21 */;
import enableScreens from "enableScreens" /* 5211 */;
import react_nativeDefault from "react-native" /* 5260 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let PlatformUtils = PlatformUtils_mod;
let FullWindowOverlay = View;
if (PlatformUtils.isIOS()) {
  FullWindowOverlay = enableScreens.FullWindowOverlay;
}
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isIOS()) {
  View = react_nativeDefault;
}
const result = size.fileFinishedImporting("design/void/OverlayView/native/OverlayView.tsx");

export default FullWindowOverlay;
export const TransitionGroupOverlayView = function TransitionGroupOverlayView(children) {
  children = children.children;
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  let tmp2 = null;
  if (Array.isArray(children)) {
    tmp2 = null;
    if (children.length > 0) {
      const merged1 = Object.assign(merged);
      tmp2 = <FullWindowOverlay style={StyleSheet.absoluteFill}>{null}</FullWindowOverlay>;
    }
  }
  return tmp2;
};
export const NonExpandingOverlayView = View;
