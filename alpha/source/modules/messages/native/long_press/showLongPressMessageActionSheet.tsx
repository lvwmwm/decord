// Module ID: 9896
// Function ID: 9897
// Name: showLongPressMessageActionSheet
// Dependencies: [5115, 9897, 2000, 2]
// Exports: showLongPressMessageActionSheet

// Module 9896 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9897, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
