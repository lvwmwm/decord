// Module ID: 5112
// Function ID: 5113
// Name: setAccessibilityFocusPrevious
// Dependencies: [5113, 2]
// Exports: default

// Module 5112 (setAccessibilityFocusPrevious)
import NativeDeviceAccessibilityModuleDefault from "NativeDeviceAccessibilityModule" /* 5113 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  NativeDeviceAccessibilityModuleDefault.restorePreviousFocus();
};
