// Module ID: 11987
// Function ID: 11988
// Name: PortalKeyboardConstants
// Dependencies: [5267, 2]

// Module 11987 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5267 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
