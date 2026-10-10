// Module ID: 10023
// Function ID: 10024
// Name: showMediaKeyboardActionSheet
// Dependencies: [5056, 10024, 2000, 7505, 2]
// Exports: hideMediaKeyboardActionSheet, presentLimitedLibraryPicker, showMediaKeyboardActionSheet

// Module 10023 (showMediaKeyboardActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import react_nativeDefault from "react-native" /* 7505 */;
import size from "module_2" /* 2 */;

const MEDIA_KEYBOARD_ACTION_SHEET = "MEDIA_KEYBOARD_ACTION_SHEET";
const result = size.fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export const hideMediaKeyboardActionSheet = function hideMediaKeyboardActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(MEDIA_KEYBOARD_ACTION_SHEET);
};
export const showMediaKeyboardActionSheet = function showMediaKeyboardActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10024, dependencyMap.paths), MEDIA_KEYBOARD_ACTION_SHEET, arg0);
};
export const presentLimitedLibraryPicker = function presentLimitedLibraryPicker() {
  const obj = react_nativeDefault;
  return obj.presentLimitedLibraryPicker();
};
