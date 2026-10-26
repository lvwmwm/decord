// Module ID: 10074
// Function ID: 10075
// Name: showLongPressMessageActionSheet
// Dependencies: [5210, 10075, 2002, 2]
// Exports: showLongPressMessageActionSheet

// Module 10074 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10075, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
