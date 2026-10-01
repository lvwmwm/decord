// Module ID: 11729
// Function ID: 11730
// Name: PortalKeyboardConstants
// Dependencies: [6231, 2]

// Module 11729 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6231 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
