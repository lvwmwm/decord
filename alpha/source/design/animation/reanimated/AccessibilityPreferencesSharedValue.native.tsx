// Module ID: 5190
// Function ID: 5191
// Name: reanimated/AccessibilityPreferencesSharedValue
// Dependencies: [5035, 2]

// Module 5190 (reanimated/AccessibilityPreferencesSharedValue)
import ReanimatedRexport from "ReanimatedRexport" /* 5035 */;
import size from "module_2" /* 2 */;

const mutable = ReanimatedRexport.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = size.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
