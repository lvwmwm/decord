// Module ID: 12224
// Function ID: 12225
// Name: PortalKeyboardConstants
// Dependencies: [5275, 2]

// Module 12224 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5275 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
