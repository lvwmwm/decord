// Module ID: 12060
// Function ID: 12061
// Name: showLongPressMessageActionSheet
// Dependencies: [5006, 12061, 2121, 2]
// Exports: showLongPressMessageActionSheet

// Module 12060 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12061, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
