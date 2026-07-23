// Module ID: 4477
// Function ID: 39587
// Name: View
// Dependencies: [31, 27, 33, 477, 4478, 4512, 2]
// Exports: TransitionGroupOverlayView

// Module 4477 (View)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import set from "set";
import set from "jsxProd";

let View = get_ActivityIndicator.View;
const StyleSheet = get_ActivityIndicator.StyleSheet;
let FullWindowOverlay = View;
if (set.isIOS()) {
  FullWindowOverlay = require("enableScreens").FullWindowOverlay;
}
if (set.isIOS()) {
  View = require("__INTERNAL_VIEW_CONFIG");
}
const result = set.fileFinishedImporting("design/void/OverlayView/native/OverlayView.tsx");

export default FullWindowOverlay;
export const TransitionGroupOverlayView = function TransitionGroupOverlayView(children) {
  children = children.children;
  let obj = Object.create(null);
  obj.children = 0;
  const merged = Object.assign(children, obj);
  let tmp3 = null;
  if (Array.isArray(children)) {
    tmp3 = null;
    if (children.length > 0) {
      obj = { style: StyleSheet.absoluteFill };
      obj = {};
      const merged1 = Object.assign(merged);
      obj["children"] = children;
      obj.children = <View />;
      tmp3 = <FullWindowOverlay />;
    }
  }
  return tmp3;
};
export const NonExpandingOverlayView = View;
