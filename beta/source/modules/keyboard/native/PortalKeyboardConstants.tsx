// Module ID: 13370
// Function ID: 13371
// Name: PortalKeyboardConstants
// Dependencies: [5560, 2]

// Module 13370 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5560 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
