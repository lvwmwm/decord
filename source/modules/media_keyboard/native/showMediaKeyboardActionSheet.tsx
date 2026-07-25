// Module ID: 9611
// Function ID: 75021
// Name: hideMediaKeyboardActionSheet
// Dependencies: [27, 4099, 9612, 1935, 2]
// Exports: hideMediaKeyboardActionSheet, presentLimitedLibraryPicker, showMediaKeyboardActionSheet

// Module 9611 (hideMediaKeyboardActionSheet)
import { NativeModules } from "get ActivityIndicator";

let result = require("MediaKeyboardActionSheet").fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export const hideMediaKeyboardActionSheet = function hideMediaKeyboardActionSheet() {
  importDefault(4099).hideActionSheet("MEDIA_KEYBOARD_ACTION_SHEET");
};
export const showMediaKeyboardActionSheet = function showMediaKeyboardActionSheet(arg0) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(9612, dependencyMap.paths), "MEDIA_KEYBOARD_ACTION_SHEET", arg0);
};
export const presentLimitedLibraryPicker = function presentLimitedLibraryPicker() {
  const NativePermissionManager = NativeModules.NativePermissionManager;
  let result;
  if (null != NativePermissionManager) {
    if (null != NativePermissionManager.presentLimitedLibraryPicker) {
      result = NativePermissionManager.presentLimitedLibraryPicker();
    }
  }
  if (null == result) {
    result = Promise.resolve();
  }
  return result;
};
