// Module ID: 11293
// Function ID: 11294
// Name: showLongPressMessageActionSheet
// Dependencies: [4860, 11294, 1987, 2]
// Exports: showLongPressMessageActionSheet

// Module 11293 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11294, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
