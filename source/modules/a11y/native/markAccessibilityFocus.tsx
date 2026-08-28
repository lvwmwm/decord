// Module ID: 4827
// Function ID: 4828
// Name: markAccessibilityFocus
// Dependencies: [4826, 2]
// Exports: default

// Module 4827 (markAccessibilityFocus)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4826 */;

const result = set.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  enforcingDefault.markCurrentFocus();
};
