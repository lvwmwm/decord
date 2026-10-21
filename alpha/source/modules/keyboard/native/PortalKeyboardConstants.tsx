// Module ID: 11933
// Function ID: 11934
// Name: PortalKeyboardConstants
// Dependencies: [5251, 2]

// Module 11933 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5251 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
