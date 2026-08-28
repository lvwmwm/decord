// Module ID: 4825
// Function ID: 4826
// Name: setAccessibilityFocusPrevious
// Dependencies: [4826, 2]
// Exports: default

// Module 4825 (setAccessibilityFocusPrevious)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4826 */;

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
};
