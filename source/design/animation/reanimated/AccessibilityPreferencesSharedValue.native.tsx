// Module ID: 4448
// Function ID: 4449
// Name: mutable
// Dependencies: [4185, 2]

// Module 4448 (mutable)
import set from "set" /* 2 */;
import module_4185 from "module_4185" /* 4185 */;

const mutable = module_4185.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = set.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
