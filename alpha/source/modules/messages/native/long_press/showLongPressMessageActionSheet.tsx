// Module ID: 9991
// Function ID: 9992
// Name: showLongPressMessageActionSheet
// Dependencies: [5171, 9992, 2002, 2]
// Exports: showLongPressMessageActionSheet

// Module 9991 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9992, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
