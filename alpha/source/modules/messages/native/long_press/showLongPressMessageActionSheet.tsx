// Module ID: 10044
// Function ID: 10045
// Name: showLongPressMessageActionSheet
// Dependencies: [5196, 10045, 2002, 2]
// Exports: showLongPressMessageActionSheet

// Module 10044 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10045, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
