// Module ID: 4168
// Function ID: 34497
// Name: mutable
// Dependencies: [4026, 2]

// Module 4168 (mutable)
import module_4026 from "module_4026";

const mutable = module_4026.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = require("set").fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
