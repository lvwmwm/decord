// Module ID: 10073
// Function ID: 10074
// Name: showLongPressMessageActionSheet
// Dependencies: [5208, 10074, 2002, 2]
// Exports: showLongPressMessageActionSheet

// Module 10073 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10074, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
