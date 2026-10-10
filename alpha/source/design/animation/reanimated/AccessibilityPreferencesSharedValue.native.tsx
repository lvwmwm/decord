// Module ID: 5095
// Function ID: 5096
// Name: reanimated/AccessibilityPreferencesSharedValue
// Dependencies: [4850, 2]

// Module 5095 (reanimated/AccessibilityPreferencesSharedValue)
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import size from "module_2" /* 2 */;

const mutable = ReanimatedRexport.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = size.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
