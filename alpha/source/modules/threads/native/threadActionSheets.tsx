// Module ID: 10975
// Function ID: 10976
// Name: threadActionSheets
// Dependencies: [5196, 10976, 2002, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10975 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10976, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
