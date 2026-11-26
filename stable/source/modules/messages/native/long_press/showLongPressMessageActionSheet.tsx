// Module ID: 12632
// Function ID: 12633
// Name: showLongPressMessageActionSheet
// Dependencies: [5542, 12633, 2121, 2]
// Exports: showLongPressMessageActionSheet

// Module 12632 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12633, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
