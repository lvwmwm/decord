// Module ID: 9977
// Function ID: 9978
// Name: showLongPressMessageActionSheet
// Dependencies: [5155, 9978, 2002, 2]
// Exports: showLongPressMessageActionSheet

// Module 9977 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9978, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
