// Module ID: 11556
// Function ID: 11557
// Name: threadActionSheets
// Dependencies: [5131, 11557, 2119, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11556 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11557, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
