// Module ID: 9629
// Function ID: 9630
// Name: showLongPressMessageActionSheet
// Dependencies: [5054, 9630, 1999, 2]
// Exports: showLongPressMessageActionSheet

// Module 9629 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9630, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
