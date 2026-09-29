// Module ID: 11687
// Function ID: 11688
// Name: PortalKeyboardConstants
// Dependencies: [6211, 2]

// Module 11687 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6211 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
