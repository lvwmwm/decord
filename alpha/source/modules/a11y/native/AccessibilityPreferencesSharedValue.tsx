// Module ID: 14519
// Function ID: 14520
// Name: AccessibilityPreferencesSharedValue
// Dependencies: [1371, 2, 14041]

// Module 14519 (AccessibilityPreferencesSharedValue)
import AccessibilityConstants from "AccessibilityConstants" /* 1371 */;
import native from "native" /* 14041 */;
import size from "module_2" /* 2 */;

const AccessibilityFeatureFlags = AccessibilityConstants.AccessibilityFeatureFlags;
const result = size.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = native.accessibilityPreferencesSharedValue;
