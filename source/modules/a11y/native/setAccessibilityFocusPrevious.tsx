// Module ID: 4469
// Function ID: 39490
// Name: setAccessibilityFocusPrevious
// Dependencies: []
// Exports: default

// Module 4469 (setAccessibilityFocusPrevious)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/a11y/native/setAccessibilityFocusPrevious.tsx");

export default function setAccessibilityFocusPrevious() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.restorePreviousFocus();
  }
};
