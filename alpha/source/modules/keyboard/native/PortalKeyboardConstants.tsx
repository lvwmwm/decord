// Module ID: 12814
// Function ID: 12815
// Name: PortalKeyboardConstants
// Dependencies: [5024, 2]

// Module 12814 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 5024 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
