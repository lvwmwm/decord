// Module ID: 4686
// Function ID: 4687
// Name: setAccessibilityFocusPrevious
// Dependencies: [17, 500, 2]
// Exports: default

// Module 4686 (setAccessibilityFocusPrevious)
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.restorePreviousFocus();
  }
};
