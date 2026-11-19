// Module ID: 11607
// Function ID: 11608
// Name: threadActionSheets
// Dependencies: [5006, 11608, 2121, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11607 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11608, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
