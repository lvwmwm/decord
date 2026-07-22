// Module ID: 13255
// Function ID: 100567
// Name: A11Y_FEATURE_MAP
// Dependencies: []

// Module 13255 (A11Y_FEATURE_MAP)
const AccessibilityFeatureFlags = require(dependencyMap[0]).AccessibilityFeatureFlags;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = require(dependencyMap[2]).accessibilityPreferencesSharedValue;
