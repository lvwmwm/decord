// Module ID: 11479
// Function ID: 11480
// Name: KEYBOARD_ANIMATION_DURATION
// Dependencies: [5439, 2]

// Module 11479 (KEYBOARD_ANIMATION_DURATION)
import BottomSheetModal from "BottomSheetModal";

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = require("set").fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
