// Module ID: 10076
// Function ID: 10077
// Name: showLongPressMessageActionSheet
// Dependencies: [5211, 10077, 1999, 2]
// Exports: showLongPressMessageActionSheet

// Module 10076 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10077, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
