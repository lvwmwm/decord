// Module ID: 12002
// Function ID: 12003
// Name: showLongPressMessageActionSheet
// Dependencies: [5008, 12003, 2119, 2]
// Exports: showLongPressMessageActionSheet

// Module 12002 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12003, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
