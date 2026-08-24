// Module ID: 4666
// Function ID: 4667
// Name: markAccessibilityFocus
// Dependencies: [4665, 2]
// Exports: default

// Module 4666 (markAccessibilityFocus)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4665 */;

const result = set.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  enforcingDefault.markCurrentFocus();
};
