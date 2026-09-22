// Module ID: 11790
// Function ID: 11791
// Name: showLongPressMessageActionSheet
// Dependencies: [4603, 11791, 1896, 2]
// Exports: showLongPressMessageActionSheet

// Module 11790 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11791, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
