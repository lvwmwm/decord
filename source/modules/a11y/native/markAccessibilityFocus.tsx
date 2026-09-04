// Module ID: 4870
// Function ID: 4871
// Name: markAccessibilityFocus
// Dependencies: [4869, 2]
// Exports: default

// Module 4870 (markAccessibilityFocus)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4869 */;

const result = set.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  enforcingDefault.markCurrentFocus();
};
