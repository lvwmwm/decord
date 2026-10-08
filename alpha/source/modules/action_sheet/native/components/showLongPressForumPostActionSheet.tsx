// Module ID: 10432
// Function ID: 10433
// Name: showLongPressForumPostActionSheet
// Dependencies: [5054, 10433, 1999, 2]
// Exports: default

// Module 10432 (showLongPressForumPostActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
  }
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequire(10433, dependencyMap.paths), "ForumPostLongPressActionSheet", obj2);
};
