// Module ID: 10372
// Function ID: 10373
// Name: showLongPressMessageActionSheet
// Dependencies: [5384, 10373, 2123, 2]
// Exports: showLongPressMessageActionSheet

// Module 10372 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10373, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
