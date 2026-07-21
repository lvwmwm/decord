// Module ID: 11144
// Function ID: 86656
// Name: KEYBOARD_ANIMATION_DURATION
// Dependencies: []

// Module 11144 (KEYBOARD_ANIMATION_DURATION)
const _module = require(dependencyMap[0]);
const keyboardAnimationConfigs = _module.getKeyboardAnimationConfigs("keyboard", 250);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
