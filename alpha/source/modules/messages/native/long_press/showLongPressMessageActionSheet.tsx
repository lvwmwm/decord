// Module ID: 10032
// Function ID: 10033
// Name: showLongPressMessageActionSheet
// Dependencies: [5192, 10033, 2002, 2]
// Exports: showLongPressMessageActionSheet

// Module 10032 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10033, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
