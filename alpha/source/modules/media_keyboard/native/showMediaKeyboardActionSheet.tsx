// Module ID: 9975
// Function ID: 9976
// Name: showMediaKeyboardActionSheet
// Dependencies: [5054, 9976, 1999, 7500, 2]
// Exports: hideMediaKeyboardActionSheet, presentLimitedLibraryPicker, showMediaKeyboardActionSheet

// Module 9975 (showMediaKeyboardActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import react_nativeDefault from "react-native" /* 7500 */;
import size from "module_2" /* 2 */;

const MEDIA_KEYBOARD_ACTION_SHEET = "MEDIA_KEYBOARD_ACTION_SHEET";
const result = size.fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export const hideMediaKeyboardActionSheet = function hideMediaKeyboardActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(MEDIA_KEYBOARD_ACTION_SHEET);
};
export const showMediaKeyboardActionSheet = function showMediaKeyboardActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9976, dependencyMap.paths), MEDIA_KEYBOARD_ACTION_SHEET, arg0);
};
export const presentLimitedLibraryPicker = function presentLimitedLibraryPicker() {
  const obj = react_nativeDefault;
  return obj.presentLimitedLibraryPicker();
};
