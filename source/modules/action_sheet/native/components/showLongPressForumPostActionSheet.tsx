// Module ID: 10264
// Function ID: 10265
// Name: showLongPressForumPostActionSheet
// Dependencies: [4415, 10265, 2009, 2]
// Exports: default

// Module 10264 (showLongPressForumPostActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4415 */;

const result = set.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet;
  }
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequireImpl(10265, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
