// Module ID: 13625
// Function ID: 13626
// Name: A11Y_FEATURE_MAP
// Dependencies: [13383, 2, 13295]

// Module 13625 (A11Y_FEATURE_MAP)
import { AccessibilityFeatureFlags } from "AccessibilityFeatureFlags";

const result = require("AccessibilityAnnouncer").fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = require("AccessibilityAnnouncer").accessibilityPreferencesSharedValue;
