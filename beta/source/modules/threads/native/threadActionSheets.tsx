// Module ID: 11669
// Function ID: 11670
// Name: threadActionSheets
// Dependencies: [5127, 11670, 2119, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11669 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11670, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
