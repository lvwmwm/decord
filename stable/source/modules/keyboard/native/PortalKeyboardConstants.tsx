// Module ID: 11845
// Function ID: 11846
// Name: PortalKeyboardConstants
// Dependencies: [6584, 2]

// Module 11845 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6584 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
