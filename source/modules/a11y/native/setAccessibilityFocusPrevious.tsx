// Module ID: 4812
// Function ID: 4813
// Name: setAccessibilityFocusPrevious
// Dependencies: [4813, 2]
// Exports: default

// Module 4812 (setAccessibilityFocusPrevious)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4813 */;

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
};
