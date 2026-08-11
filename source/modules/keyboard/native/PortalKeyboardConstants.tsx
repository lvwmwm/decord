// Module ID: 11425
// Function ID: 11426
// Name: KEYBOARD_ANIMATION_DURATION
// Dependencies: [5399, 2]

// Module 11425 (KEYBOARD_ANIMATION_DURATION)
import BottomSheetModal from "BottomSheetModal";

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = require("set").fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
