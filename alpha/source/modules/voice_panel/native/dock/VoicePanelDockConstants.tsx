// Module ID: 11437
// Function ID: 11438
// Name: VoicePanelDockConstants
// Dependencies: [11419, 11438, 575, 2]
// Exports: getDockInset, getVoicePanelDockButtonsTop, getVoicePanelDockHeight

// Module 11437 (VoicePanelDockConstants)
import nativeDefault from "native" /* 575 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11419 */;
import GestureConstants from "GestureConstants" /* 11438 */;
import size from "module_2" /* 2 */;

let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp3;
let tmp4;
let tmp5;
let tmp7;
let tmp8;
let tmp9;
const IS_IOS = VoicePanelConstants.IS_IOS;
const PULL_GESTURE_RESISTANCE = GestureConstants.PULL_GESTURE_RESISTANCE;
const sm = nativeDefault.radii.sm;
const PX_4 = nativeDefault.space.PX_4;
let sum = nativeDefault.space.PX_24 + nativeDefault.space.PX_4;
const items = [{ code: "(function getDockInset_VoicePanelDockConstantsTsx1(pressed){let[DOCK_PADDING_HORIZONTAL,DOCK_PADDING_HORIZONTAL_PRESSED]=this.__closure;return DOCK_PADDING_HORIZONTAL+(DOCK_PADDING_HORIZONTAL_PRESSED-DOCK_PADDING_HORIZONTAL)*pressed;})" }, sum, nativeDefault.space.PX_16];
[tmp3, tmp4, tmp5] = items;
function getDockInset(arg0) {
  return c0 + (c1 - c0) * arg0;
}
const items1 = [tmp4, tmp5];
getDockInset.__closure = items1;
getDockInset.__workletHash = 14543646828628;
getDockInset.__initData = tmp3;
const diff = nativeDefault.space.PX_16 - 4;
const items2 = [{ code: "(function getVoicePanelDockPaddingBottom_VoicePanelDockConstantsTsx2(safeAreaBottom){let[IS_IOS,DOCK_PADDING_BOTTOM_MIN]=this.__closure;return IS_IOS?DOCK_PADDING_BOTTOM_MIN:Math.max(DOCK_PADDING_BOTTOM_MIN,safeAreaBottom);})" }, IS_IOS, nativeDefault.space.PX_24];
[tmp7, tmp8, tmp9] = items2;
function getVoicePanelDockPaddingBottom(arg0) {
  let bound;
  const tmp = c0;
  if (tmp) {
    bound = c1;
  } else {
    const _Math = Math;
    bound = Math.max(c1, arg0);
  }
  return bound;
}
const items3 = [tmp8, tmp9];
getVoicePanelDockPaddingBottom.__closure = items3;
getVoicePanelDockPaddingBottom.__workletHash = 1051676343655;
getVoicePanelDockPaddingBottom.__initData = tmp7;
const items4 = [{ code: "(function getVoicePanelDockHeight_VoicePanelDockConstantsTsx3(safeAreaBottom){let[DOCK_PADDING_TOP,DOCK_ROW_HEIGHT,getVoicePanelDockPaddingBottom]=this.__closure;return DOCK_PADDING_TOP+DOCK_ROW_HEIGHT+getVoicePanelDockPaddingBottom(safeAreaBottom);})" }, diff, 40, getVoicePanelDockPaddingBottom];
let c0;
let c1;
let c2;
[tmp10, tmp11, tmp12, tmp13] = items4;
function getVoicePanelDockHeight(arg0) {
  const sum = c0 + c1;
  return sum + _undefined(arg0);
}
const items5 = [tmp11, tmp12, tmp13];
getVoicePanelDockHeight.__closure = items5;
getVoicePanelDockHeight.__workletHash = 8239861783104;
getVoicePanelDockHeight.__initData = tmp10;
const PX_12 = nativeDefault.space.PX_12;
const PX_8 = nativeDefault.space.PX_8;
const result = 1 / PULL_GESTURE_RESISTANCE;
const PX_82 = nativeDefault.space.PX_8;
const result1 = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockConstants.tsx");

export const DOCK_ROW_HEIGHT = 40;
export const DOCK_TILE_SIZE = 32;
export const DOCK_TILE_RADIUS = sm;
export const DOCK_GLYPH_GAP = PX_4;
export const DOCK_PADDING_HORIZONTAL = sum;
export { getDockInset };
export const DOCK_PADDING_TOP = diff;
export { getVoicePanelDockHeight };
export function getVoicePanelDockButtonsTop(arg0) {
  return arg0 - diff - 4;
}
export const DOCK_GAP = PX_12;
export const DOCK_FADE_TIMING = { duration: 200 };
export const DOCK_DRAG_HANDLE_WIDTH = 48;
export const DOCK_DRAG_HANDLE_TOP = PX_8;
export const DOCK_PULL_SNAP_DISTANCE = 160;
export const DOCK_PULL_SNAP_GIVE = 160 * (1 - result);
export const DOCK_EXPAND_GESTURE_CANCEL_DISTANCE = 24;
export const DOCK_TAP_MAX_MOVEMENT = 8;
export const DOCK_SETTLE_PROGRESS = 0.12;
export const DOCK_PRESS_EXTENSION = PX_82;
export const DOCK_PRESS_PHYSICS = { mass: 0.4, damping: 26, stiffness: 320, overshootClamping: true };
