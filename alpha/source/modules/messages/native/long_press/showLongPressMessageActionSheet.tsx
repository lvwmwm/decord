// Module ID: 9913
// Function ID: 9914
// Name: showLongPressMessageActionSheet
// Dependencies: [5118, 9914, 2002, 2]
// Exports: showLongPressMessageActionSheet

// Module 9913 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9914, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
};
