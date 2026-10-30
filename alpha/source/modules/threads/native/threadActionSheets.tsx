// Module ID: 11122
// Function ID: 11123
// Name: threadActionSheets
// Dependencies: [5253, 11123, 1995, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11122 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11123, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
