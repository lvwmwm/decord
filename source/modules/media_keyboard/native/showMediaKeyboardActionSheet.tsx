// Module ID: 9651
// Function ID: 75151
// Name: hideMediaKeyboardActionSheet
// Dependencies: [27, 4133, 9652, 1935, 2]
// Exports: hideMediaKeyboardActionSheet, presentLimitedLibraryPicker, showMediaKeyboardActionSheet

// Module 9651 (hideMediaKeyboardActionSheet)
import { NativeModules } from "get ActivityIndicator";

let result = require("MediaKeyboardActionSheet").fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export const hideMediaKeyboardActionSheet = function hideMediaKeyboardActionSheet() {
  importDefault(4133).hideActionSheet("MEDIA_KEYBOARD_ACTION_SHEET");
};
export const showMediaKeyboardActionSheet = function showMediaKeyboardActionSheet(arg0) {
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(9652, dependencyMap.paths), "MEDIA_KEYBOARD_ACTION_SHEET", arg0);
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
