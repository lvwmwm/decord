// Module ID: 11518
// Function ID: 11519
// Name: PortalKeyboardConstants
// Dependencies: [6045, 2]

// Module 11518 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
