// Module ID: 10056
// Function ID: 10057
// Name: hideMediaKeyboardActionSheet
// Dependencies: [17, 4312, 10057, 2007, 2]
// Exports: hideMediaKeyboardActionSheet, presentLimitedLibraryPicker, showMediaKeyboardActionSheet

// Module 10056 (hideMediaKeyboardActionSheet)
import { NativeModules } from "get ActivityIndicator";

const MEDIA_KEYBOARD_ACTION_SHEET = "MEDIA_KEYBOARD_ACTION_SHEET";
let result = require("MediaKeyboardActionSheet").fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export const hideMediaKeyboardActionSheet = function hideMediaKeyboardActionSheet() {
  importDefault(4312).hideActionSheet(MEDIA_KEYBOARD_ACTION_SHEET);
};
export const showMediaKeyboardActionSheet = function showMediaKeyboardActionSheet(arg0) {
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(10057, dependencyMap.paths), MEDIA_KEYBOARD_ACTION_SHEET, arg0);
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
