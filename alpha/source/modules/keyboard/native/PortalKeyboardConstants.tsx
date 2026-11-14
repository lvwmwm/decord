// Module ID: 13368
// Function ID: 13369
// Name: PortalKeyboardConstants
// Dependencies: [5570, 2]

// Module 13368 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5570 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
