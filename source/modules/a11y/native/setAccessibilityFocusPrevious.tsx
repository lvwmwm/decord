// Module ID: 4811
// Function ID: 4812
// Name: setAccessibilityFocusPrevious
// Dependencies: [4812, 2]
// Exports: default

// Module 4811 (setAccessibilityFocusPrevious)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4812 */;

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
};
