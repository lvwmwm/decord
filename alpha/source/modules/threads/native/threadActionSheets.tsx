// Module ID: 10432
// Function ID: 10433
// Name: threadActionSheets
// Dependencies: [5055, 10433, 2000, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10432 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10433, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
