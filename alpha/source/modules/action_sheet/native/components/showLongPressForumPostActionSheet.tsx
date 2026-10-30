// Module ID: 11114
// Function ID: 11115
// Name: showLongPressForumPostActionSheet
// Dependencies: [5253, 11115, 1995, 2]
// Exports: default

// Module 11114 (showLongPressForumPostActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
  }
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequire(11115, dependencyMap.paths), "ForumPostLongPressActionSheet", obj2);
};
