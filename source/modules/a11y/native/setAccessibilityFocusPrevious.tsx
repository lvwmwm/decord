// Module ID: 4664
// Function ID: 4665
// Name: setAccessibilityFocusPrevious
// Dependencies: [4665, 2]
// Exports: default

// Module 4664 (setAccessibilityFocusPrevious)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4665 */;

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
};
