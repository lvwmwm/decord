// Module ID: 10106
// Function ID: 10107
// Name: showLongPressMessageActionSheet
// Dependencies: [5242, 10107, 2002, 2]
// Exports: showLongPressMessageActionSheet

// Module 10106 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10107, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
