// Module ID: 4133
// Function ID: 34382
// Name: mutable
// Dependencies: [3991, 2]

// Module 4133 (mutable)
import module_3991 from "module_3991";

const mutable = module_3991.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = require("set").fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
