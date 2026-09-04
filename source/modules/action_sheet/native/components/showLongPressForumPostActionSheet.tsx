// Module ID: 10149
// Function ID: 10150
// Name: showLongPressForumPostActionSheet
// Dependencies: [4448, 10150, 2008, 2]
// Exports: default

// Module 10149 (showLongPressForumPostActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet;
  }
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequireImpl(10150, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};
