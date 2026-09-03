// Module ID: 4861
// Function ID: 4862
// Name: setAccessibilityFocusPrevious
// Dependencies: [4862, 2]
// Exports: default

// Module 4861 (setAccessibilityFocusPrevious)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4862 */;

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
};
