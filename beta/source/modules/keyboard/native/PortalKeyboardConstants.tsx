// Module ID: 12318
// Function ID: 12319
// Name: PortalKeyboardConstants
// Dependencies: [6901, 2]

// Module 12318 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6901 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
