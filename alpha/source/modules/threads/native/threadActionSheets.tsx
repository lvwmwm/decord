// Module ID: 10465
// Function ID: 10466
// Name: threadActionSheets
// Dependencies: [5056, 10466, 2000, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10465 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10466, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
