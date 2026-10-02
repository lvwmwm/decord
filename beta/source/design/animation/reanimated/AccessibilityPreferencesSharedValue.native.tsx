// Module ID: 4840
// Function ID: 4841
// Name: reanimated/AccessibilityPreferencesSharedValue
// Dependencies: [4570, 2]

// Module 4840 (reanimated/AccessibilityPreferencesSharedValue)
import ReanimatedRexport from "ReanimatedRexport" /* 4570 */;
import size from "module_2" /* 2 */;

const mutable = ReanimatedRexport.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = size.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
