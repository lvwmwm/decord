// Module ID: 12202
// Function ID: 12203
// Name: PortalKeyboardConstants
// Dependencies: [6895, 2]

// Module 12202 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6895 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
