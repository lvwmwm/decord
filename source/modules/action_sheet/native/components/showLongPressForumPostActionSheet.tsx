// Module ID: 10303
// Function ID: 10304
// Name: showLongPressForumPostActionSheet
// Dependencies: [4445, 10304, 2009, 2]
// Exports: default

// Module 10303 (showLongPressForumPostActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet;
  }
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequireImpl(10304, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
