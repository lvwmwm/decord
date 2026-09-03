// Module ID: 4863
// Function ID: 4864
// Name: markAccessibilityFocus
// Dependencies: [4862, 2]
// Exports: default

// Module 4863 (markAccessibilityFocus)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4862 */;

const result = set.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  enforcingDefault.markCurrentFocus();
};
