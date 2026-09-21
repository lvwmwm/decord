// Module ID: 12166
// Function ID: 12167
// Name: PortalKeyboardConstants
// Dependencies: [6863, 2]

// Module 12166 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6863 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
