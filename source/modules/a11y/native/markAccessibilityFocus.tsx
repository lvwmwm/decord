// Module ID: 4909
// Function ID: 4910
// Name: markAccessibilityFocus
// Dependencies: [4908, 2]
// Exports: default

// Module 4909 (markAccessibilityFocus)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4908 */;

const result = set.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  enforcingDefault.markCurrentFocus();
};
