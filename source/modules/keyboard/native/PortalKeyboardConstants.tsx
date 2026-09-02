// Module ID: 11831
// Function ID: 11832
// Name: KEYBOARD_ANIMATION_DURATION
// Dependencies: [5632, 2]

// Module 11831 (KEYBOARD_ANIMATION_DURATION)
import set from "set" /* 2 */;
import BottomSheetModal from "BottomSheetModal" /* 5632 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = set.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
