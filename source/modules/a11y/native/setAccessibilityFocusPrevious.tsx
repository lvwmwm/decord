// Module ID: 4747
// Function ID: 4748
// Name: setAccessibilityFocusPrevious
// Dependencies: [4748, 2]
// Exports: default

// Module 4747 (setAccessibilityFocusPrevious)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4748 */;

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
};
