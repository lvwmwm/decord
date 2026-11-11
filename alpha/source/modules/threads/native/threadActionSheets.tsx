// Module ID: 11834
// Function ID: 11835
// Name: threadActionSheets
// Dependencies: [5489, 11835, 2118, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11834 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11835, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
