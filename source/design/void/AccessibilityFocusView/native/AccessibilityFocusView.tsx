// Module ID: 13275
// Function ID: 13276
// Name: AccessibilityFocusView
// Dependencies: [19, 17, 21, 500, 13276, 2]
// Exports: default

// Module 13275 (AccessibilityFocusView)
import "noop";
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
  const obj = {};
  const merged = Object.assign(Object.assign(arg0, Object.create(null)));
  obj.onAccessibilityFocus = onAccessibilityFocus;
  obj.onAccessibilityBlur = onAccessibilityBlur;
  return <closure_1 />;
};
