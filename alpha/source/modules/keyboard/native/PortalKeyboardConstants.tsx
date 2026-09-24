// Module ID: 12378
// Function ID: 12379
// Name: PortalKeyboardConstants
// Dependencies: [6957, 2]

// Module 12378 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6957 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
