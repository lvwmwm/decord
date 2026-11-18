// Module ID: 11629
// Function ID: 11630
// Name: threadActionSheets
// Dependencies: [5037, 11630, 2121, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11629 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11630, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
