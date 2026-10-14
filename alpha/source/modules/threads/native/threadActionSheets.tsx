// Module ID: 10476
// Function ID: 10477
// Name: threadActionSheets
// Dependencies: [5060, 10477, 2000, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10476 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10477, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
