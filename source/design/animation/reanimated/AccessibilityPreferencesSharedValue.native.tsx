// Module ID: 4447
// Function ID: 4448
// Name: mutable
// Dependencies: [4184, 2]

// Module 4447 (mutable)
import set from "set" /* 2 */;
import module_4184 from "module_4184" /* 4184 */;

const mutable = module_4184.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = set.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
