// Module ID: 12582
// Function ID: 12583
// Name: PortalKeyboardConstants
// Dependencies: [5400, 2]

// Module 12582 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5400 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
