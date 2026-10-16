// Module ID: 9674
// Function ID: 9675
// Name: showLongPressMessageActionSheet
// Dependencies: [5056, 9675, 2000, 2]
// Exports: showLongPressMessageActionSheet

// Module 9674 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9675, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
