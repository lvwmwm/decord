// Module ID: 11549
// Function ID: 11550
// Name: threadActionSheets
// Dependencies: [5008, 11550, 2119, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11549 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11550, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
