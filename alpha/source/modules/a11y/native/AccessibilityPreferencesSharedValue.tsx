// Module ID: 15640
// Function ID: 15641
// Name: AccessibilityPreferencesSharedValue
// Dependencies: [1374, 2, 15186]

// Module 15640 (AccessibilityPreferencesSharedValue)
import AccessibilityConstants from "AccessibilityConstants" /* 1374 */;
import native from "native" /* 15186 */;
import size from "module_2" /* 2 */;

const AccessibilityFeatureFlags = AccessibilityConstants.AccessibilityFeatureFlags;
const result = size.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = native.accessibilityPreferencesSharedValue;
