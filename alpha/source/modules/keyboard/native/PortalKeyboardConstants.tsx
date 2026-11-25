// Module ID: 12947
// Function ID: 12948
// Name: PortalKeyboardConstants
// Dependencies: [5244, 2]

// Module 12947 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5244 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
