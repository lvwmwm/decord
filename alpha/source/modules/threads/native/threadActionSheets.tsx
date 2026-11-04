// Module ID: 11328
// Function ID: 11329
// Name: threadActionSheets
// Dependencies: [5382, 11329, 2123, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11328 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11329, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
