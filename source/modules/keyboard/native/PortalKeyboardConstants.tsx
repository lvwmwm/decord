// Module ID: 11608
// Function ID: 11609
// Name: KEYBOARD_ANIMATION_DURATION
// Dependencies: [5624, 2]

// Module 11608 (KEYBOARD_ANIMATION_DURATION)
import set from "set" /* 2 */;
import BottomSheetModal from "BottomSheetModal" /* 5624 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = set.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
