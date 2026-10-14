// Module ID: 11523
// Function ID: 11524
// Name: PortalKeyboardConstants
// Dependencies: [6311, 2]

// Module 11523 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6311 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
