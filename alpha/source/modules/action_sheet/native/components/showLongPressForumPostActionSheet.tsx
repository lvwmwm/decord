// Module ID: 10484
// Function ID: 10485
// Name: showLongPressForumPostActionSheet
// Dependencies: [4724, 10485, 1980, 2]
// Exports: default

// Module 10484 (showLongPressForumPostActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10485, dependencyMap.paths), "ForumPostLongPressActionSheet", { thread, parentChannel, onClose: hideActionSheet });
};
