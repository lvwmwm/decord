// Module ID: 11968
// Function ID: 11969
// Name: PortalKeyboardConstants
// Dependencies: [5255, 2]

// Module 11968 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5255 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
