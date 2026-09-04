// Module ID: 4868
// Function ID: 4869
// Name: setAccessibilityFocusPrevious
// Dependencies: [4869, 2]
// Exports: default

// Module 4868 (setAccessibilityFocusPrevious)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4869 */;

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
};
