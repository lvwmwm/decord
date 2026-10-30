// Module ID: 16224
// Function ID: 16225
// Name: AccessibilityPreferencesSharedValue
// Dependencies: [1360, 2, 15770]

// Module 16224 (AccessibilityPreferencesSharedValue)
import AccessibilityConstants from "AccessibilityConstants" /* 1360 */;
import native from "native" /* 15770 */;
import size from "module_2" /* 2 */;

const AccessibilityFeatureFlags = AccessibilityConstants.AccessibilityFeatureFlags;
const result = size.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = native.accessibilityPreferencesSharedValue;
