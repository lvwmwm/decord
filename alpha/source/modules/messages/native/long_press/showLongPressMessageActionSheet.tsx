// Module ID: 12153
// Function ID: 12154
// Name: showLongPressMessageActionSheet
// Dependencies: [5226, 12154, 2119, 2]
// Exports: showLongPressMessageActionSheet

// Module 12153 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12154, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
