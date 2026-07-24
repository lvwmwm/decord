// Module ID: 13422
// Function ID: 103050
// Name: A11Y_FEATURE_MAP
// Dependencies: [13180, 2, 13092]

// Module 13422 (A11Y_FEATURE_MAP)
import { AccessibilityFeatureFlags } from "AccessibilityFeatureFlags";

const result = require("AccessibilityAnnouncer").fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = require("AccessibilityAnnouncer").accessibilityPreferencesSharedValue;
