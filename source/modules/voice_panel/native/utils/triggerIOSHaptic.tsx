// Module ID: 15648
// Function ID: 119548
// Name: triggerIOSHaptic
// Dependencies: []
// Exports: default

// Module 15648 (triggerIOSHaptic)
const IS_IOS = require(dependencyMap[0]).IS_IOS;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = require(dependencyMap[1]).triggerHapticFeedback(require(dependencyMap[1]).HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = require(dependencyMap[1]);
  }
};
