// Module ID: 10188
// Function ID: 10189
// Name: showLongPressMessageActionSheet
// Dependencies: [5258, 10189, 1994, 2]
// Exports: showLongPressMessageActionSheet

// Module 10188 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10189, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
