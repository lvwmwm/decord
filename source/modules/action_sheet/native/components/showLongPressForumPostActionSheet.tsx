// Module ID: 10200
// Function ID: 10201
// Name: showLongPressForumPostActionSheet
// Dependencies: [4346, 10201, 2008, 2]
// Exports: default

// Module 10200 (showLongPressForumPostActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;

const result = set.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet;
  }
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequireImpl(10201, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
