// Module ID: 11650
// Function ID: 11651
// Name: PortalKeyboardConstants
// Dependencies: [6112, 2]

// Module 11650 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6112 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
