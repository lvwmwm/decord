// Module ID: 14091
// Function ID: 14092
// Name: A11Y_FEATURE_MAP
// Dependencies: [13849, 2, 13771]

// Module 14091 (A11Y_FEATURE_MAP)
import set from "set" /* 2 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 13771 */;
import AccessibilityFeatureFlags2 from "AccessibilityFeatureFlags" /* 13849 */;

const AccessibilityFeatureFlags = AccessibilityFeatureFlags2.AccessibilityFeatureFlags;
const result = set.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = AccessibilityAnnouncer.accessibilityPreferencesSharedValue;
