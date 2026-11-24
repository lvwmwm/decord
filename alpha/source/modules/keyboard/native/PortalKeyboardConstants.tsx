// Module ID: 12823
// Function ID: 12824
// Name: PortalKeyboardConstants
// Dependencies: [5149, 2]

// Module 12823 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5149 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
