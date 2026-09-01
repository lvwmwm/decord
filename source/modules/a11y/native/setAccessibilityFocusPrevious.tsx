// Module ID: 4860
// Function ID: 4861
// Name: setAccessibilityFocusPrevious
// Dependencies: [4861, 2]
// Exports: default

// Module 4860 (setAccessibilityFocusPrevious)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4861 */;

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
};
