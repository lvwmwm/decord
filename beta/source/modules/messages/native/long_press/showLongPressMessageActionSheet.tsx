// Module ID: 11815
// Function ID: 11816
// Name: showLongPressMessageActionSheet
// Dependencies: [4757, 11816, 1984, 2]
// Exports: showLongPressMessageActionSheet

// Module 11815 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11816, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
