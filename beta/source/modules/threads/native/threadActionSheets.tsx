// Module ID: 10822
// Function ID: 10823
// Name: threadActionSheets
// Dependencies: [4801, 10823, 1987, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10822 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10823, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
