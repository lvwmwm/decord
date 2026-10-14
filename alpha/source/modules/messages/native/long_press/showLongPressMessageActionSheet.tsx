// Module ID: 9688
// Function ID: 9689
// Name: showLongPressMessageActionSheet
// Dependencies: [5060, 9689, 2000, 2]
// Exports: showLongPressMessageActionSheet

// Module 9688 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9689, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
