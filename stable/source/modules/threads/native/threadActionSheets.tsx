// Module ID: 11141
// Function ID: 11142
// Name: threadActionSheets
// Dependencies: [5258, 11142, 1994, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11141 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11142, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
