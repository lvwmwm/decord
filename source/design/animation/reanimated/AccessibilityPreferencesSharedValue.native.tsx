// Module ID: 4305
// Function ID: 4306
// Name: mutable
// Dependencies: [4162, 2]

// Module 4305 (mutable)
import module_4162 from "module_4162";

const mutable = module_4162.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = require("set").fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
