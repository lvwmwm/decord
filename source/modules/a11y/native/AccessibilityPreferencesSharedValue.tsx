// Module ID: 13905
// Function ID: 13906
// Name: A11Y_FEATURE_MAP
// Dependencies: [13663, 2, 13585]

// Module 13905 (A11Y_FEATURE_MAP)
import set from "set" /* 2 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 13585 */;
import AccessibilityFeatureFlags2 from "AccessibilityFeatureFlags" /* 13663 */;

const AccessibilityFeatureFlags = AccessibilityFeatureFlags2.AccessibilityFeatureFlags;
const result = set.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = AccessibilityAnnouncer.accessibilityPreferencesSharedValue;
