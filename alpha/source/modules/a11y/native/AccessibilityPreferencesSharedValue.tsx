// Module ID: 16514
// Function ID: 16515
// Name: AccessibilityPreferencesSharedValue
// Dependencies: [1361, 2, 16060]

// Module 16514 (AccessibilityPreferencesSharedValue)
import AccessibilityConstants from "AccessibilityConstants" /* 1361 */;
import native from "native" /* 16060 */;
import size from "module_2" /* 2 */;

const AccessibilityFeatureFlags = AccessibilityConstants.AccessibilityFeatureFlags;
const result = size.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = native.accessibilityPreferencesSharedValue;
