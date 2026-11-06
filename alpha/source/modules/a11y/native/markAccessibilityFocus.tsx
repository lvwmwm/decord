// Module ID: 6121
// Function ID: 6122
// Name: react-native
// Dependencies: [6120, 2]
// Exports: default

// Module 6121 (react-native)
import react_nativeDefault from "react-native" /* 6120 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  const obj = react_nativeDefault;
  obj.markCurrentFocus();
};
