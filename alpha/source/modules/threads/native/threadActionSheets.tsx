// Module ID: 11291
// Function ID: 11292
// Name: threadActionSheets
// Dependencies: [5404, 11292, 2118, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11291 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11292, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
