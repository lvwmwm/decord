// Module ID: 9296
// Function ID: 72621
// Name: CONTEXT_MENU_LONG_PRESS_DURATION_MS
// Dependencies: []

// Module 9296 (CONTEXT_MENU_LONG_PRESS_DURATION_MS)
const _module = require(dependencyMap[0]);
const HapticFeedbackTypes = require(dependencyMap[1]).HapticFeedbackTypes;
const isIOSResult = _module.isIOS();
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuConstants.native.tsx");

export const CONTEXT_MENU_LONG_PRESS_DURATION_MS = 300;
export const CONTEXT_MENU_OPEN_HAPTIC = _module.isIOS() ? HapticFeedbackTypes.IMPACT_HEAVY : HapticFeedbackTypes.IMPACT_MEDIUM;
export const CONTEXT_MENU_ITEM_PADDING = 12;
export const CONTEXT_MENU_ITEM_BASE_HEIGHT = 42;
export const CONTEXT_MENU_DIVIDER_HEIGHT = 4;
export const CONTEXT_MENU_EDGE_OFFSET = 12;
export const CONTEXT_MENU_MIN_WIDTH = 220;
export const CONTEXT_MENU_OFFSET = 10;
export const CONTEXT_MENU_MIN_SCALE = 0.5;
export const CONTEXT_MENU_SPRING = {};
