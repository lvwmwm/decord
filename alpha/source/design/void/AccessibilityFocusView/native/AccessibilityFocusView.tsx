// Module ID: 14480
// Function ID: 14481
// Name: AccessibilityFocusView
// Dependencies: [19, 21, 14481, 2]
// Exports: default

// Module 14480 (AccessibilityFocusView)
import AccessibilityFocusNativeComponentDefault from "AccessibilityFocusNativeComponent" /* 14481 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default function AccessibilityFocusView(arg0) {
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onAccessibilityFocus: 0, onAccessibilityBlur: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onAccessibilityFocus = onAccessibilityFocus;
  obj.onAccessibilityBlur = onAccessibilityBlur;
  return jsx(AccessibilityFocusNativeComponentDefault, {});
};
