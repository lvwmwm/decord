// Module ID: 4473
// Function ID: 39530
// Name: setAccessibilityFocusPrevious
// Dependencies: [27, 477, 2]
// Exports: default

// Module 4473 (setAccessibilityFocusPrevious)
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.restorePreviousFocus();
  }
};
