// Module ID: 11278
// Function ID: 11279
// Name: threadActionSheets
// Dependencies: [5381, 11279, 2123, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11278 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11279, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
