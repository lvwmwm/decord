// Module ID: 16232
// Function ID: 16233
// Name: AccessibilityFocusView
// Dependencies: [19, 21, 16233, 2]
// Exports: default

// Module 16232 (AccessibilityFocusView)
import Fragment from "Fragment" /* 21 */;
import AccessibilityFocusNativeComponentDefault from "AccessibilityFocusNativeComponent" /* 16233 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default function AccessibilityFocusView(arg0) {
  let onAccessibilityBlur;
  let onAccessibilityFocus;
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onAccessibilityFocus: 0, onAccessibilityBlur: 0 }));
  AccessibilityFocusNativeComponentDefault;
  const merged1 = Object.assign(merged);
  return <tmp2 onAccessibilityFocus={onAccessibilityFocus} onAccessibilityBlur={onAccessibilityBlur} />;
};
