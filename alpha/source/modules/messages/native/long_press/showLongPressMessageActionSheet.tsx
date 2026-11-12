// Module ID: 12534
// Function ID: 12535
// Name: showLongPressMessageActionSheet
// Dependencies: [5489, 12535, 2118, 2]
// Exports: showLongPressMessageActionSheet

// Module 12534 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12535, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
