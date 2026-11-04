// Module ID: 10366
// Function ID: 10367
// Name: showLongPressMessageActionSheet
// Dependencies: [5382, 10367, 2123, 2]
// Exports: showLongPressMessageActionSheet

// Module 10366 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10367, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
