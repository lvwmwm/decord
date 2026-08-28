// Module ID: 14024
// Function ID: 14025
// Name: A11Y_FEATURE_MAP
// Dependencies: [13782, 2, 13704]

// Module 14024 (A11Y_FEATURE_MAP)
import set from "set" /* 2 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 13704 */;
import AccessibilityFeatureFlags2 from "AccessibilityFeatureFlags" /* 13782 */;

const AccessibilityFeatureFlags = AccessibilityFeatureFlags2.AccessibilityFeatureFlags;
const result = set.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = AccessibilityAnnouncer.accessibilityPreferencesSharedValue;
