// Module ID: 10958
// Function ID: 10959
// Name: threadActionSheets
// Dependencies: [5192, 10959, 2002, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10958 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10959, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
