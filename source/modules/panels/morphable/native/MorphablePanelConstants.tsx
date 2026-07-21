// Module ID: 10007
// Function ID: 77327
// Name: MIN_PAN_GESTURE_MOVE
// Dependencies: []

// Module 10007 (MIN_PAN_GESTURE_MOVE)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/panels/morphable/native/MorphablePanelConstants.tsx");

export const MIN_PAN_GESTURE_MOVE = 10;
export const PANEL_TAP_GESTURE_MAX_DISTANCE = 30;
export const IS_IOS = _module.isIOS();
export const PIP_POP_HEIGHT = 140;
export const PIP_WINDOW_OFFSET = 16;
export const MIN_PIP_TOSS_VELOCITY = 500;
export const MorphablePanelModes = { PANEL: "panel", PIP: "pip", CHANGING_ORIENTATION: "changing_orientation", UNDEFINED: "undefined" };
export const PanelControlsModes = { FLOATING_DEFAULT: "floating-default", DRAWER: "drawer", UNDEFINED: "undefined" };
export const SCALE_PHYSICS = {};
export const POP_RESISTANCE = 0.55;
