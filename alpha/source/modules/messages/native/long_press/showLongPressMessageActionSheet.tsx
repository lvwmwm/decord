// Module ID: 10324
// Function ID: 10325
// Name: showLongPressMessageActionSheet
// Dependencies: [5404, 10325, 2118, 2]
// Exports: showLongPressMessageActionSheet

// Module 10324 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10325, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
