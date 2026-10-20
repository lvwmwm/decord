// Module ID: 11885
// Function ID: 11886
// Name: PortalKeyboardConstants
// Dependencies: [5230, 2]

// Module 11885 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5230 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
