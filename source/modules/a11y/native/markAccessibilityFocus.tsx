// Module ID: 4470
// Function ID: 39484
// Name: markAccessibilityFocus
// Dependencies: []
// Exports: default

// Module 4470 (markAccessibilityFocus)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.markCurrentFocus();
  }
};
