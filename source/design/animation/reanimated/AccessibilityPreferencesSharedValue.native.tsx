// Module ID: 4673
// Function ID: 4674
// Name: mutable
// Dependencies: [4119, 2]

// Module 4673 (mutable)
import set from "set" /* 2 */;
import module_4119 from "module_4119" /* 4119 */;

const mutable = module_4119.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = set.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
