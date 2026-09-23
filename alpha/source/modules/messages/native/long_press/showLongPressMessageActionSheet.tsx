// Module ID: 11988
// Function ID: 11989
// Name: showLongPressMessageActionSheet
// Dependencies: [4794, 11989, 1980, 2]
// Exports: showLongPressMessageActionSheet

// Module 11988 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11989, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
