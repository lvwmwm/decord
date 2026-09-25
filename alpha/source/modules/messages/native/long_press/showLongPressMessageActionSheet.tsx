// Module ID: 11138
// Function ID: 11139
// Name: showLongPressMessageActionSheet
// Dependencies: [4796, 11139, 1980, 2]
// Exports: showLongPressMessageActionSheet

// Module 11138 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11139, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
