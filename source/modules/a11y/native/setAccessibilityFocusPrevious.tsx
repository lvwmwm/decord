// Module ID: 4828
// Function ID: 4829
// Name: setAccessibilityFocusPrevious
// Dependencies: [4829, 2]
// Exports: default

// Module 4828 (setAccessibilityFocusPrevious)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4829 */;

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
};
