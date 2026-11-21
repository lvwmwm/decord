// Module ID: 11621
// Function ID: 11622
// Name: showMediaKeyboardActionSheet
// Dependencies: [5127, 11622, 2119, 7802, 2]
// Exports: hideMediaKeyboardActionSheet, presentLimitedLibraryPicker, showMediaKeyboardActionSheet

// Module 11621 (showMediaKeyboardActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import react_nativeDefault from "react-native" /* 7802 */;
import size from "module_2" /* 2 */;

const MEDIA_KEYBOARD_ACTION_SHEET = "MEDIA_KEYBOARD_ACTION_SHEET";
const result = size.fileFinishedImporting("modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx");

export function hideMediaKeyboardActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(MEDIA_KEYBOARD_ACTION_SHEET);
}
export function showMediaKeyboardActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11622, dependencyMap.paths), MEDIA_KEYBOARD_ACTION_SHEET, arg0);
}
export function presentLimitedLibraryPicker() {
  const obj = react_nativeDefault;
  return obj.presentLimitedLibraryPicker();
}
