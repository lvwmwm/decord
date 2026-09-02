// Module ID: 14314
// Function ID: 14315
// Name: A11Y_FEATURE_MAP
// Dependencies: [14072, 2, 13994]

// Module 14314 (A11Y_FEATURE_MAP)
import set from "set" /* 2 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 13994 */;
import AccessibilityFeatureFlags2 from "AccessibilityFeatureFlags" /* 14072 */;

const AccessibilityFeatureFlags = AccessibilityFeatureFlags2.AccessibilityFeatureFlags;
const result = set.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = AccessibilityAnnouncer.accessibilityPreferencesSharedValue;
