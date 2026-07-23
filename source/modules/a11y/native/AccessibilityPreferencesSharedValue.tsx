// Module ID: 13369
// Function ID: 102723
// Name: A11Y_FEATURE_MAP
// Dependencies: [13127, 2, 13040]

// Module 13369 (A11Y_FEATURE_MAP)
import { AccessibilityFeatureFlags } from "AccessibilityFeatureFlags";

const result = require("AccessibilityAnnouncer").fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = require("AccessibilityAnnouncer").accessibilityPreferencesSharedValue;
