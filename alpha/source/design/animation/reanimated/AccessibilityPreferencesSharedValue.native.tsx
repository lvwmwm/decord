// Module ID: 5372
// Function ID: 5373
// Name: reanimated/AccessibilityPreferencesSharedValue
// Dependencies: [1652, 2]

// Module 5372 (reanimated/AccessibilityPreferencesSharedValue)
import module_1652 from "module_1652" /* 1652 */;
import size from "module_2" /* 2 */;

const mutable = module_1652.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = size.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
