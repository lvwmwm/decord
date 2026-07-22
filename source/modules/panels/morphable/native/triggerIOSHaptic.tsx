// Module ID: 15587
// Function ID: 118929
// Name: triggerIOSHaptic
// Dependencies: []
// Exports: default

// Module 15587 (triggerIOSHaptic)
const IS_IOS = require(dependencyMap[0]).IS_IOS;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(dependencyMap[1]).triggerHapticFeedback(require(dependencyMap[1]).HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(dependencyMap[1]);
  }
};
