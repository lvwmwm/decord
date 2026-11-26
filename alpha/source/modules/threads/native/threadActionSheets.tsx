// Module ID: 11703
// Function ID: 11704
// Name: threadActionSheets
// Dependencies: [5257, 11704, 2120, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11703 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11704, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
