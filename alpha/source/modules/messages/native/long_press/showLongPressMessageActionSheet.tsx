// Module ID: 10313
// Function ID: 10314
// Name: showLongPressMessageActionSheet
// Dependencies: [5376, 10314, 2118, 2]
// Exports: showLongPressMessageActionSheet

// Module 10313 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10314, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}
