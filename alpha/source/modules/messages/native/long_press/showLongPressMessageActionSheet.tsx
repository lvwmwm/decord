// Module ID: 11357
// Function ID: 11358
// Name: showLongPressMessageActionSheet
// Dependencies: [4830, 11358, 1981, 2]
// Exports: showLongPressMessageActionSheet

// Module 11357 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11358, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
