// Module ID: 4907
// Function ID: 4908
// Name: setAccessibilityFocusPrevious
// Dependencies: [4908, 2]
// Exports: default

// Module 4907 (setAccessibilityFocusPrevious)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4908 */;

const result = set.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  enforcingDefault.restorePreviousFocus();
};
