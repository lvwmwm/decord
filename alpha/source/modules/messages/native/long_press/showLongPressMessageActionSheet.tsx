// Module ID: 10141
// Function ID: 10142
// Name: showLongPressMessageActionSheet
// Dependencies: [5247, 10142, 2000, 2]
// Exports: showLongPressMessageActionSheet

// Module 10141 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10142, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
