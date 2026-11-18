// Module ID: 12083
// Function ID: 12084
// Name: showLongPressMessageActionSheet
// Dependencies: [5037, 12084, 2121, 2]
// Exports: showLongPressMessageActionSheet

// Module 12083 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12084, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
