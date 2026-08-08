// Module ID: 11421
// Function ID: 11422
// Name: KEYBOARD_ANIMATION_DURATION
// Dependencies: [5399, 2]

// Module 11421 (KEYBOARD_ANIMATION_DURATION)
import BottomSheetModal from "BottomSheetModal";

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = require("set").fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
