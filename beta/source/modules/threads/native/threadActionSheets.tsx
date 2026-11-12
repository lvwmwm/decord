// Module ID: 11305
// Function ID: 11306
// Name: threadActionSheets
// Dependencies: [5406, 11306, 2118, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11305 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11306, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
