// Module ID: 12054
// Function ID: 12055
// Name: showLongPressMessageActionSheet
// Dependencies: [5131, 12055, 2119, 2]
// Exports: showLongPressMessageActionSheet

// Module 12054 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12055, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
