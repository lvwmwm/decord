// Module ID: 11748
// Function ID: 11749
// Name: PortalKeyboardConstants
// Dependencies: [6527, 2]

// Module 11748 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6527 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
