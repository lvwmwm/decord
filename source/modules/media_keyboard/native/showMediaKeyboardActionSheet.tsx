// Module ID: 9925
// Function ID: 9926
// Name: hideMediaKeyboardActionSheet
// Dependencies: [17, 4253, 9926, 1959, 2]
// Exports: hideMediaKeyboardActionSheet, presentLimitedLibraryPicker, showMediaKeyboardActionSheet

// Module 9925 (hideMediaKeyboardActionSheet)
import { NativeModules } from "get ActivityIndicator";

const MEDIA_KEYBOARD_ACTION_SHEET = "MEDIA_KEYBOARD_ACTION_SHEET";
let result = require("MediaKeyboardActionSheet").fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export const hideMediaKeyboardActionSheet = function hideMediaKeyboardActionSheet() {
  importDefault(4253).hideActionSheet(MEDIA_KEYBOARD_ACTION_SHEET);
};
export const showMediaKeyboardActionSheet = function showMediaKeyboardActionSheet(arg0) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(9926, dependencyMap.paths), MEDIA_KEYBOARD_ACTION_SHEET, arg0);
};
export const presentLimitedLibraryPicker = function presentLimitedLibraryPicker() {
  const NativePermissionManager = NativeModules.NativePermissionManager;
  let result;
  if (NativePermissionManager != null) {
    const presentLimitedLibraryPicker = NativePermissionManager.presentLimitedLibraryPicker;
    if (presentLimitedLibraryPicker != null) {
      result = presentLimitedLibraryPicker();
    }
  }
  if (result == null) {
    result = Promise.resolve();
  }
  return result;
};
