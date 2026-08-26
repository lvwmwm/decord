// Module ID: 4813
// Function ID: 4814
// Name: markAccessibilityFocus
// Dependencies: [4812, 2]
// Exports: default

// Module 4813 (markAccessibilityFocus)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4812 */;

const result = set.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  enforcingDefault.markCurrentFocus();
};
