// Module ID: 9678
// Function ID: 9679
// Name: showLongPressMessageActionSheet
// Dependencies: [5056, 9679, 2000, 2]
// Exports: showLongPressMessageActionSheet

// Module 9678 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9679, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
