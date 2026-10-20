// Module ID: 9678
// Function ID: 9679
// Name: ContextMenuConstants
// Dependencies: [1384, 5173, 2]

// Module 9678 (ContextMenuConstants)
import HapticUtils from "HapticUtils" /* 5173 */;
import PlatformUtils_mod from "PlatformUtils" /* 1384 */;
import size from "module_2" /* 2 */;

let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isIOS();
const HapticFeedbackTypes = HapticUtils.HapticFeedbackTypes;
const tmp3 = PlatformUtils ? HapticFeedbackTypes.IMPACT_HEAVY : HapticFeedbackTypes.IMPACT_MEDIUM;
const result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuConstants.native.tsx");

export const CONTEXT_MENU_LONG_PRESS_DURATION_MS = 300;
export const CONTEXT_MENU_OPEN_HAPTIC = tmp3;
export const CONTEXT_MENU_ITEM_PADDING = 12;
export const CONTEXT_MENU_ITEM_BASE_HEIGHT = 42;
export const CONTEXT_MENU_DIVIDER_HEIGHT = 4;
export const CONTEXT_MENU_EDGE_OFFSET = 12;
export const CONTEXT_MENU_MIN_WIDTH = 220;
export const CONTEXT_MENU_OFFSET = 10;
export const CONTEXT_MENU_MIN_SCALE = 0.5;
export const CONTEXT_MENU_SPRING = { mass: 0.3, damping: 20, stiffness: 200, overshootClamping: true, restDisplacementThreshold: 0.001 };
