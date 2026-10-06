// Module ID: 11394
// Function ID: 11395
// Name: PortalKeyboardConstants
// Dependencies: [6038, 2]

// Module 11394 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6038 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
