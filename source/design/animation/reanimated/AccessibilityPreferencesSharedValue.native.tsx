// Module ID: 4129
// Function ID: 34352
// Name: mutable
// Dependencies: []

// Module 4129 (mutable)
const _module = require(dependencyMap[0]);
const mutable = _module.makeMutable({ FRAME_STOP: true, openMemberVerificationModal: false, videoOverlay: false });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
