// Module ID: 10349
// Function ID: 10350
// Name: showLongPressForumPostActionSheet
// Dependencies: [4603, 10350, 1896, 2]
// Exports: default

// Module 10349 (showLongPressForumPostActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10350, dependencyMap.paths), "ForumPostLongPressActionSheet", { thread, parentChannel, onClose: hideActionSheet });
};
