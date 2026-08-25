// Module ID: 4749
// Function ID: 4750
// Name: markAccessibilityFocus
// Dependencies: [4748, 2]
// Exports: default

// Module 4749 (markAccessibilityFocus)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4748 */;

const result = set.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  enforcingDefault.markCurrentFocus();
};
