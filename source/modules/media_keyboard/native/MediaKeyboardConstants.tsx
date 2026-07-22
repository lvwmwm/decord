// Module ID: 1552
// Function ID: 17589
// Name: DRAG_HANDLE
// Dependencies: []

// Module 1552 (DRAG_HANDLE)
const _module = require(dependencyMap[0]);
const obj = {};
if (_module.isMetaQuest()) {
  obj.slotHeight = 24;
  obj.barColor = importDefault(dependencyMap[1]).colors.BACKGROUND_MOD_STRONG;
  obj.barWidth = importDefault(dependencyMap[1]).space.PX_64;
  obj.barHeight = importDefault(dependencyMap[1]).space.PX_8;
  obj.barMarginTop = importDefault(dependencyMap[1]).space.PX_16;
  let tmp2 = obj;
} else {
  obj.slotHeight = 16;
  obj.barColor = importDefault(dependencyMap[1]).colors.BACKGROUND_MOD_MUTED;
  obj.barWidth = importDefault(dependencyMap[1]).space.PX_32;
  obj.barHeight = importDefault(dependencyMap[1]).space.PX_4;
  obj.barMarginTop = importDefault(dependencyMap[1]).space.PX_4;
  tmp2 = obj;
}
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardConstants.tsx");

export const DRAG_HANDLE = tmp2;
export const HEADER_HANDLE_HEIGHT = tmp2.slotHeight;
export const MediaKeyboardTarget = { CHAT: 0, [0]: "CHAT", COMMAND: 1, [1]: "COMMAND", APP_LAUNCHER: 2, [2]: "APP_LAUNCHER", INTERACTION_MODAL: 3, [3]: "INTERACTION_MODAL" };
export const InAppCameraUsedViews = { FULLY_EXPANDED: "fully expanded" };
export const InAppCameraUsedCameraPreviewTypes = { CAMERA_TILE: "camera tile", CAMERA_BUTTON: "camera button", TAKE_A_PHOTO_BUTTON: "take a photo button" };
export const MediaPickerActionSheetEngagedActions = { FULLY_EXPANDED: "fully expanded", VIEW_ALL_CLICKED: "view all clicked", MEDIA_SELECTED: "media selected" };
export const MEDIA_PICKER_SEND_BUTTON_SPRING = { marginVertical: null, maxHeight: null, maxWidth: null, minHeight: null };
