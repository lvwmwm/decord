// Module ID: 10002
// Function ID: 10003
// Name: showLongPressMessageActionSheet
// Dependencies: [5171, 10003, 2002, 2]
// Exports: showLongPressMessageActionSheet

// Module 10002 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10003, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
