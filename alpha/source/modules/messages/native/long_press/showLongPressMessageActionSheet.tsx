// Module ID: 12540
// Function ID: 12541
// Name: showLongPressMessageActionSheet
// Dependencies: [5489, 12541, 2118, 2]
// Exports: showLongPressMessageActionSheet

// Module 12540 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12541, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
