// Module ID: 11721
// Function ID: 11722
// Name: PortalKeyboardConstants
// Dependencies: [6241, 2]

// Module 11721 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6241 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
