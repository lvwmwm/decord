// Module ID: 4644
// Function ID: 4645
// Name: markAccessibilityFocus
// Dependencies: [17, 500, 2]
// Exports: default

// Module 4644 (markAccessibilityFocus)
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.markCurrentFocus();
  }
};
