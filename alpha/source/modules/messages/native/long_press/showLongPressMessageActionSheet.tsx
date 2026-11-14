// Module ID: 12630
// Function ID: 12631
// Name: showLongPressMessageActionSheet
// Dependencies: [5552, 12631, 2121, 2]
// Exports: showLongPressMessageActionSheet

// Module 12630 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12631, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
