// Module ID: 4288
// Function ID: 4289
// Name: mutable
// Dependencies: [4145, 2]

// Module 4288 (mutable)
import module_4145 from "module_4145";

const mutable = module_4145.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = require("set").fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
