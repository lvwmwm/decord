// Module ID: 9653
// Function ID: 75214
// Name: hideMediaKeyboardActionSheet
// Dependencies: [27, 4098, 9654, 1934, 2]
// Exports: hideMediaKeyboardActionSheet, presentLimitedLibraryPicker, showMediaKeyboardActionSheet

// Module 9653 (hideMediaKeyboardActionSheet)
import { NativeModules } from "get ActivityIndicator";

let result = require("MediaKeyboardActionSheet").fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export const hideMediaKeyboardActionSheet = function hideMediaKeyboardActionSheet() {
  importDefault(4098).hideActionSheet("MEDIA_KEYBOARD_ACTION_SHEET");
};
export const showMediaKeyboardActionSheet = function showMediaKeyboardActionSheet(arg0) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(9654, dependencyMap.paths), "MEDIA_KEYBOARD_ACTION_SHEET", arg0);
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
