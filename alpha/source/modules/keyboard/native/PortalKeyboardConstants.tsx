// Module ID: 12289
// Function ID: 12290
// Name: PortalKeyboardConstants
// Dependencies: [6869, 2]

// Module 12289 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6869 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
