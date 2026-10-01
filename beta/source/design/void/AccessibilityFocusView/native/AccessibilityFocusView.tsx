// Module ID: 13658
// Function ID: 13659
// Name: AccessibilityFocusView
// Dependencies: [19, 21, 13659, 2]
// Exports: default

// Module 13658 (AccessibilityFocusView)
import Fragment from "Fragment" /* 21 */;
import AccessibilityFocusNativeComponentDefault from "AccessibilityFocusNativeComponent" /* 13659 */;
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
