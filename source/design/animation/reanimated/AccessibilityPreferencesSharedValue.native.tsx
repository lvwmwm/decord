// Module ID: 4484
// Function ID: 4485
// Name: mutable
// Dependencies: [4218, 2]

// Module 4484 (mutable)
import set from "set" /* 2 */;
import module_4218 from "module_4218" /* 4218 */;

const mutable = module_4218.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = set.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
