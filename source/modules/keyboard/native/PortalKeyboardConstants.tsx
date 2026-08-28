// Module ID: 11544
// Function ID: 11545
// Name: KEYBOARD_ANIMATION_DURATION
// Dependencies: [5589, 2]

// Module 11544 (KEYBOARD_ANIMATION_DURATION)
import set from "set" /* 2 */;
import BottomSheetModal from "BottomSheetModal" /* 5589 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = set.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
