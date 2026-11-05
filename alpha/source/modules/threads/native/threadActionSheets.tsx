// Module ID: 11336
// Function ID: 11337
// Name: threadActionSheets
// Dependencies: [5384, 11337, 2123, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11336 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11337, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
