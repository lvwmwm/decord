// Module ID: 10168
// Function ID: 10169
// Name: showLongPressMessageActionSheet
// Dependencies: [5253, 10169, 1995, 2]
// Exports: showLongPressMessageActionSheet

// Module 10168 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10169, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
