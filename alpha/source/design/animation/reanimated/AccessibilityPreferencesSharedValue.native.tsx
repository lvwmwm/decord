// Module ID: 4760
// Function ID: 4761
// Name: reanimated/AccessibilityPreferencesSharedValue
// Dependencies: [4493, 2]

// Module 4760 (reanimated/AccessibilityPreferencesSharedValue)
import ReanimatedRexport from "ReanimatedRexport" /* 4493 */;
import size from "module_2" /* 2 */;

const mutable = ReanimatedRexport.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = size.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
