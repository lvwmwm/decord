// Module ID: 4466
// Function ID: 39436
// Name: markAccessibilityFocus
// Dependencies: [2097152017, 2030043153, 2113929233]
// Exports: default

// Module 4466 (markAccessibilityFocus)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/a11y/native/markAccessibilityFocus.tsx");

export default function markAccessibilityFocus() {
  if (obj.isIOS()) {
    const DCDAccessibilityManager = NativeModules.DCDAccessibilityManager;
    DCDAccessibilityManager.markCurrentFocus();
  }
};
