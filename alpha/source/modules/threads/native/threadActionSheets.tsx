// Module ID: 12347
// Function ID: 12348
// Name: threadActionSheets
// Dependencies: [5546, 12348, 2121, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 12347 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(12348, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
