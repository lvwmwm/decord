// Module ID: 11655
// Function ID: 11656
// Name: threadActionSheets
// Dependencies: [5226, 11656, 2119, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11655 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11656, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
