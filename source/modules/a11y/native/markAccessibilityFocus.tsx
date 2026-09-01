// Module ID: 4862
// Function ID: 4863
// Name: markAccessibilityFocus
// Dependencies: [4861, 2]
// Exports: default

// Module 4862 (markAccessibilityFocus)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4861 */;

const result = set.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  enforcingDefault.markCurrentFocus();
};
