// Module ID: 12000
// Function ID: 12001
// Name: PortalKeyboardConstants
// Dependencies: [5306, 2]

// Module 12000 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5306 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
