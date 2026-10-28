// Module ID: 12049
// Function ID: 12050
// Name: PortalKeyboardConstants
// Dependencies: [5301, 2]

// Module 12049 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5301 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
