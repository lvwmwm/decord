// Module ID: 13520
// Function ID: 13521
// Name: A11Y_FEATURE_MAP
// Dependencies: [13278, 2, 13190]

// Module 13520 (A11Y_FEATURE_MAP)
import { AccessibilityFeatureFlags } from "AccessibilityFeatureFlags";

const result = require("AccessibilityAnnouncer").fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = require("AccessibilityAnnouncer").accessibilityPreferencesSharedValue;
