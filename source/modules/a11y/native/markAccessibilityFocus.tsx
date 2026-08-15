// Module ID: 4659
// Function ID: 4660
// Name: markAccessibilityFocus
// Dependencies: [17, 500, 2]
// Exports: default

// Module 4659 (markAccessibilityFocus)
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.markCurrentFocus();
  }
};
