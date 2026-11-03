// Module ID: 12500
// Function ID: 12501
// Name: PortalKeyboardConstants
// Dependencies: [5398, 2]

// Module 12500 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5398 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
