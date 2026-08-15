// Module ID: 4666
// Function ID: 4667
// Name: mutable
// Dependencies: [4115, 2]

// Module 4666 (mutable)
import module_4115 from "module_4115";

const mutable = module_4115.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = require("set").fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
