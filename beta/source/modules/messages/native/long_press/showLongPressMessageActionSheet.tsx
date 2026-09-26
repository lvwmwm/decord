// Module ID: 11937
// Function ID: 11938
// Name: showLongPressMessageActionSheet
// Dependencies: [4755, 11938, 1980, 2]
// Exports: showLongPressMessageActionSheet

// Module 11937 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11938, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
