// Module ID: 9640
// Function ID: 75132
// Name: hideMediaKeyboardActionSheet
// Dependencies: [102039552, 86769664, 297926656, 305070080, 270270464]
// Exports: hideMediaKeyboardActionSheet, presentLimitedLibraryPicker, showMediaKeyboardActionSheet

// Module 9640 (hideMediaKeyboardActionSheet)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export const hideMediaKeyboardActionSheet = function hideMediaKeyboardActionSheet() {
  importDefault(dependencyMap[1]).hideActionSheet("MEDIA_KEYBOARD_ACTION_SHEET");
};
export const showMediaKeyboardActionSheet = function showMediaKeyboardActionSheet(arg0) {
  importDefault(dependencyMap[1]).openLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), "MEDIA_KEYBOARD_ACTION_SHEET", arg0);
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
