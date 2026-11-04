// Module ID: 12581
// Function ID: 12582
// Name: PortalKeyboardConstants
// Dependencies: [5400, 2]

// Module 12581 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5400 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
