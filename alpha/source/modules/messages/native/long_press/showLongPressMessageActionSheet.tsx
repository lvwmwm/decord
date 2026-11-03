// Module ID: 10318
// Function ID: 10319
// Name: showLongPressMessageActionSheet
// Dependencies: [5381, 10319, 2123, 2]
// Exports: showLongPressMessageActionSheet

// Module 10318 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10319, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
