// Module ID: 11273
// Function ID: 11274
// Name: threadActionSheets
// Dependencies: [5374, 11274, 2118, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11273 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11274, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
