// Module ID: 10972
// Function ID: 10973
// Name: showLongPressForumPostActionSheet
// Dependencies: [5196, 10973, 2002, 2]
// Exports: default

// Module 10972 (showLongPressForumPostActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
  }
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequire(10973, dependencyMap.paths), "ForumPostLongPressActionSheet", obj2);
};
