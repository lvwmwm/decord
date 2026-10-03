// Module ID: 11280
// Function ID: 11281
// Name: showLongPressMessageActionSheet
// Dependencies: [4854, 11281, 1987, 2]
// Exports: showLongPressMessageActionSheet

// Module 11280 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11281, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
