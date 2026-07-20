// Module ID: 4465
// Function ID: 39434
// Name: setAccessibilityFocusPrevious
// Dependencies: [2097152017, 2030043153, 2113929233]
// Exports: default

// Module 4465 (setAccessibilityFocusPrevious)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.restorePreviousFocus();
  }
};
