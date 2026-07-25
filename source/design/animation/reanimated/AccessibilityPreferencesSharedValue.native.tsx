// Module ID: 4134
// Function ID: 34394
// Name: mutable
// Dependencies: [3992, 2]

// Module 4134 (mutable)
import module_3992 from "module_3992";

const mutable = module_3992.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = require("set").fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
