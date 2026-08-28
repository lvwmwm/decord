// Module ID: 13692
// Function ID: 13693
// Name: AccessibilityFocusView
// Dependencies: [19, 21, 13693, 2]
// Exports: default

// Module 13692 (AccessibilityFocusView)
import noopAll from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 13693 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default function AccessibilityFocusView(arg0) {
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onAccessibilityFocus = onAccessibilityFocus;
  obj.onAccessibilityBlur = onAccessibilityBlur;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};
