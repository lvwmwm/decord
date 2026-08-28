// Module ID: 4449
// Function ID: 4450
// Name: mutable
// Dependencies: [4186, 2]

// Module 4449 (mutable)
import set from "set" /* 2 */;
import module_4186 from "module_4186" /* 4186 */;

const mutable = module_4186.makeMutable({ reduceMotion: false, prefersCrossfades: false, screenReaderEnabled: false });
const result = set.fileFinishedImporting("design/animation/reanimated/AccessibilityPreferencesSharedValue.native.tsx");

export const accessibilityPreferencesSharedValue = mutable;
