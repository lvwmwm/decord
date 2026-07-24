// Module ID: 1552
// Function ID: 17591
// Name: DRAG_HANDLE
// Dependencies: [1553, 689, 2]

// Module 1552 (DRAG_HANDLE)
import isMetaQuest from "isMetaQuest";

const obj = {};
if (isMetaQuest.isMetaQuest()) {
  obj.slotHeight = 24;
  obj.barColor = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG;
  obj.barWidth = require("_createForOfIteratorHelperLoose").space.PX_64;
  obj.barHeight = require("_createForOfIteratorHelperLoose").space.PX_8;
  obj.barMarginTop = require("_createForOfIteratorHelperLoose").space.PX_16;
  let tmp2 = obj;
} else {
  obj.slotHeight = 16;
  obj.barColor = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED;
  obj.barWidth = require("_createForOfIteratorHelperLoose").space.PX_32;
  obj.barHeight = require("_createForOfIteratorHelperLoose").space.PX_4;
  obj.barMarginTop = require("_createForOfIteratorHelperLoose").space.PX_4;
  tmp2 = obj;
}
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardConstants.tsx");

export const DRAG_HANDLE = tmp2;
export const HEADER_HANDLE_HEIGHT = tmp2.slotHeight;
export const MediaKeyboardTarget = { CHAT: 0, [0]: "CHAT", COMMAND: 1, [1]: "COMMAND", APP_LAUNCHER: 2, [2]: "APP_LAUNCHER", INTERACTION_MODAL: 3, [3]: "INTERACTION_MODAL" };
export const InAppCameraUsedViews = { FULLY_EXPANDED: "fully expanded" };
export const InAppCameraUsedCameraPreviewTypes = { CAMERA_TILE: "camera tile", CAMERA_BUTTON: "camera button", TAKE_A_PHOTO_BUTTON: "take a photo button" };
export const MediaPickerActionSheetEngagedActions = { FULLY_EXPANDED: "fully expanded", VIEW_ALL_CLICKED: "view all clicked", MEDIA_SELECTED: "media selected" };
export const MEDIA_PICKER_SEND_BUTTON_SPRING = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };
