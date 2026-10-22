// Module ID: 5900
// Function ID: 5901
// Name: react-native
// Dependencies: [5899, 2]
// Exports: default

// Module 5900 (react-native)
import react_nativeDefault from "react-native" /* 5899 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  const obj = react_nativeDefault;
  obj.markCurrentFocus();
};
