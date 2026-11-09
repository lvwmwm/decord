// Module ID: 10307
// Function ID: 10308
// Name: showLongPressMessageActionSheet
// Dependencies: [5374, 10308, 2118, 2]
// Exports: showLongPressMessageActionSheet

// Module 10307 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10308, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
