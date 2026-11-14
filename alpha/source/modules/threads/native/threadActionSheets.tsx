// Module ID: 11894
// Function ID: 11895
// Name: threadActionSheets
// Dependencies: [5552, 11895, 2121, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11894 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11895, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
