// Module ID: 12203
// Function ID: 12204
// Name: showLongPressMessageActionSheet
// Dependencies: [5257, 12204, 2120, 2]
// Exports: showLongPressMessageActionSheet

// Module 12203 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12204, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
