// Module ID: 5125
// Function ID: 5126
// Name: reanimated/AccessibilityPreferencesSharedValue
// Dependencies: [1653, 2]

// Module 5125 (reanimated/AccessibilityPreferencesSharedValue)
import module_1653 from "module_1653" /* 1653 */;
import size from "module_2" /* 2 */;

const mutable = module_1653.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = size.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
