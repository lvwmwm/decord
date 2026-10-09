// Module ID: 9648
// Function ID: 9649
// Name: showLongPressMessageActionSheet
// Dependencies: [5055, 9649, 2000, 2]
// Exports: showLongPressMessageActionSheet

// Module 9648 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9649, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
