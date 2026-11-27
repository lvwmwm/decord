// Module ID: 11711
// Function ID: 11712
// Name: threadActionSheets
// Dependencies: [5257, 11712, 2120, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11711 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11712, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
