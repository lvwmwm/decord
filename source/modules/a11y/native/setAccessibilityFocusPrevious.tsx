// Module ID: 4535
// Function ID: 4536
// Name: setAccessibilityFocusPrevious
// Dependencies: [17, 500, 2]
// Exports: default

// Module 4535 (setAccessibilityFocusPrevious)
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.restorePreviousFocus();
  }
};
