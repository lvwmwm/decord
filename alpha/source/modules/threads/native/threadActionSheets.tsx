// Module ID: 11103
// Function ID: 11104
// Name: threadActionSheets
// Dependencies: [5247, 11104, 2000, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11103 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11104, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
