// Module ID: 10455
// Function ID: 10456
// Name: showLongPressForumPostActionSheet
// Dependencies: [5056, 10456, 2000, 2]
// Exports: default

// Module 10455 (showLongPressForumPostActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
  }
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequire(10456, dependencyMap.paths), "ForumPostLongPressActionSheet", obj2);
};
