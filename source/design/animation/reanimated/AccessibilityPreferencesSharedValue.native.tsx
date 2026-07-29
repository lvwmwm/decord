// Module ID: 4192
// Function ID: 4193
// Name: mutable
// Dependencies: [4050, 2]

// Module 4192 (mutable)
import module_4050 from "module_4050";

const mutable = module_4050.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = require("set").fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
