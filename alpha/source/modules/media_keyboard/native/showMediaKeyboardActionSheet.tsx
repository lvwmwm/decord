// Module ID: 9994
// Function ID: 9995
// Name: showMediaKeyboardActionSheet
// Dependencies: [5055, 9995, 2000, 7505, 2]
// Exports: hideMediaKeyboardActionSheet, presentLimitedLibraryPicker, showMediaKeyboardActionSheet

// Module 9994 (showMediaKeyboardActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
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
  obj.openLazy(asyncRequire(9995, dependencyMap.paths), MEDIA_KEYBOARD_ACTION_SHEET, arg0);
};
export const presentLimitedLibraryPicker = function presentLimitedLibraryPicker() {
  const obj = react_nativeDefault;
  return obj.presentLimitedLibraryPicker();
};
