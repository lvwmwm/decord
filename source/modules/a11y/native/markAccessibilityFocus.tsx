// Module ID: 4474
// Function ID: 39532
// Name: markAccessibilityFocus
// Dependencies: [27, 477, 2]
// Exports: default

// Module 4474 (markAccessibilityFocus)
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.markCurrentFocus();
  }
};
