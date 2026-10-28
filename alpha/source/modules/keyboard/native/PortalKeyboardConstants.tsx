// Module ID: 11946
// Function ID: 11947
// Name: PortalKeyboardConstants
// Dependencies: [5305, 2]

// Module 11946 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5305 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
