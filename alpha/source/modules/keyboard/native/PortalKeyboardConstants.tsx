// Module ID: 12013
// Function ID: 12014
// Name: PortalKeyboardConstants
// Dependencies: [5269, 2]

// Module 12013 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5269 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
