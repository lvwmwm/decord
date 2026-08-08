// Module ID: 4306
// Function ID: 4307
// Name: mutable
// Dependencies: [4036, 2]

// Module 4306 (mutable)
import module_4036 from "module_4036";

const mutable = module_4036.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = require("set").fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
