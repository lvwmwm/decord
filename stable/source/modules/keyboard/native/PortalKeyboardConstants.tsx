// Module ID: 12599
// Function ID: 12600
// Name: PortalKeyboardConstants
// Dependencies: [5424, 2]

// Module 12599 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5424 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
