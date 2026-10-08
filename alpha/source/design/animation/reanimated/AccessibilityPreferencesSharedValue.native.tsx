// Module ID: 5093
// Function ID: 5094
// Name: reanimated/AccessibilityPreferencesSharedValue
// Dependencies: [4810, 2]

// Module 5093 (reanimated/AccessibilityPreferencesSharedValue)
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import size from "module_2" /* 2 */;

const mutable = ReanimatedRexport.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = size.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
