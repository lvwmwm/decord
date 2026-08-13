// Module ID: 4345
// Function ID: 4346
// Name: mutable
// Dependencies: [4083, 2]

// Module 4345 (mutable)
import module_4083 from "module_4083";

const mutable = module_4083.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = require("set").fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
