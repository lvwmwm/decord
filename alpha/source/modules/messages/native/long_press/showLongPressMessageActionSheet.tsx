// Module ID: 11365
// Function ID: 11366
// Name: showLongPressMessageActionSheet
// Dependencies: [4809, 11366, 1981, 2]
// Exports: showLongPressMessageActionSheet

// Module 11365 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11366, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
