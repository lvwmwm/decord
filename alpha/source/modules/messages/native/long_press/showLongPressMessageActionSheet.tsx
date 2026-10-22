// Module ID: 10051
// Function ID: 10052
// Name: showLongPressMessageActionSheet
// Dependencies: [5196, 10052, 2002, 2]
// Exports: showLongPressMessageActionSheet

// Module 10051 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10052, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
