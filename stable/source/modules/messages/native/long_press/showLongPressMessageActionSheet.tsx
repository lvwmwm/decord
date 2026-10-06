// Module ID: 11022
// Function ID: 11023
// Name: showLongPressMessageActionSheet
// Dependencies: [4801, 11023, 1987, 2]
// Exports: showLongPressMessageActionSheet

// Module 11022 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11023, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
