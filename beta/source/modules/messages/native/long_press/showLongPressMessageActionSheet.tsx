// Module ID: 12127
// Function ID: 12128
// Name: showLongPressMessageActionSheet
// Dependencies: [5127, 12128, 2119, 2]
// Exports: showLongPressMessageActionSheet

// Module 12127 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12128, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
