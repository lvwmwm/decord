// Module ID: 14200
// Function ID: 14201
// Name: AccessibilityPreferencesSharedValue
// Dependencies: [1359, 2, 14201]

// Module 14200 (AccessibilityPreferencesSharedValue)
import AccessibilityConstants from "AccessibilityConstants" /* 1359 */;
import native from "native" /* 14201 */;
import size from "module_2" /* 2 */;

const AccessibilityFeatureFlags = AccessibilityConstants.AccessibilityFeatureFlags;
const result = size.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = native.accessibilityPreferencesSharedValue;
