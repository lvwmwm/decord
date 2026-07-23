// Module ID: 13028
// Function ID: 100664
// Name: AccessibilityFocusView
// Dependencies: [31, 27, 33, 477, 13029, 2]
// Exports: default

// Module 13028 (AccessibilityFocusView)
import "result";
import { jsx } from "jsxProd";
import set from "set";
import set from "jsxProd";

if (set.isAndroid()) {
  let importDefaultResult = require("__INTERNAL_VIEW_CONFIG");
} else {
  importDefaultResult = require("get ActivityIndicator").requireNativeComponent("AccessibilityFocusView");
}
const result = set.fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default function AccessibilityFocusView(arg0) {
  let onAccessibilityBlur;
  let onAccessibilityFocus;
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  let obj = Object.create(null);
  obj.onAccessibilityFocus = 0;
  obj.onAccessibilityBlur = 0;
  obj = {};
  const merged = Object.assign(Object.assign(arg0, obj));
  obj["onAccessibilityFocus"] = onAccessibilityFocus;
  obj["onAccessibilityBlur"] = onAccessibilityBlur;
  return <closure_1 />;
};
