// Module ID: 11828
// Function ID: 11829
// Name: threadActionSheets
// Dependencies: [5489, 11829, 2118, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11828 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11829, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
