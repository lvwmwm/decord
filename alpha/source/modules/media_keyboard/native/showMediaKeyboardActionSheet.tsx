// Module ID: 10511
// Function ID: 10512
// Name: showMediaKeyboardActionSheet
// Dependencies: [5253, 10512, 1995, 7955, 2]
// Exports: hideMediaKeyboardActionSheet, presentLimitedLibraryPicker, showMediaKeyboardActionSheet

// Module 10511 (showMediaKeyboardActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import react_nativeDefault from "react-native" /* 7955 */;
import size from "module_2" /* 2 */;

const MEDIA_KEYBOARD_ACTION_SHEET = "MEDIA_KEYBOARD_ACTION_SHEET";
const result = size.fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export function hideMediaKeyboardActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(MEDIA_KEYBOARD_ACTION_SHEET);
}
export function showMediaKeyboardActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10512, dependencyMap.paths), MEDIA_KEYBOARD_ACTION_SHEET, arg0);
}
export function presentLimitedLibraryPicker() {
  const obj = react_nativeDefault;
  return obj.presentLimitedLibraryPicker();
}
