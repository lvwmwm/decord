// Module ID: 10108
// Function ID: 10109
// Name: showLongPressMessageActionSheet
// Dependencies: [5246, 10109, 1999, 2]
// Exports: showLongPressMessageActionSheet

// Module 10108 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10109, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
