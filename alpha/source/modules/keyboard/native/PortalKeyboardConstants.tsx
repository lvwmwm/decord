// Module ID: 12369
// Function ID: 12370
// Name: PortalKeyboardConstants
// Dependencies: [6955, 2]

// Module 12369 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6955 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
