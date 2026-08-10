// Module ID: 13711
// Function ID: 13712
// Name: A11Y_FEATURE_MAP
// Dependencies: [13469, 2, 13381]

// Module 13711 (A11Y_FEATURE_MAP)
import { AccessibilityFeatureFlags } from "AccessibilityFeatureFlags";

const result = require("AccessibilityAnnouncer").fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = require("AccessibilityAnnouncer").accessibilityPreferencesSharedValue;
