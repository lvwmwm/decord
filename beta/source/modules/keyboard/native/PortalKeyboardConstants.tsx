// Module ID: 12567
// Function ID: 12568
// Name: PortalKeyboardConstants
// Dependencies: [5392, 2]

// Module 12567 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5392 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
