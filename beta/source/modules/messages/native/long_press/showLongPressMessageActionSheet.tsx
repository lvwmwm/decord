// Module ID: 11779
// Function ID: 11780
// Name: showLongPressMessageActionSheet
// Dependencies: [4725, 11780, 1984, 2]
// Exports: showLongPressMessageActionSheet

// Module 11779 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11780, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
