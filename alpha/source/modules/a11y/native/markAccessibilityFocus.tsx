// Module ID: 6101
// Function ID: 6102
// Name: react-native
// Dependencies: [6100, 2]
// Exports: default

// Module 6101 (react-native)
import react_nativeDefault from "react-native" /* 6100 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  const obj = react_nativeDefault;
  obj.markCurrentFocus();
};
