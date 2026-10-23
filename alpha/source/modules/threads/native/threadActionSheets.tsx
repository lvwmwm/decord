// Module ID: 11006
// Function ID: 11007
// Name: threadActionSheets
// Dependencies: [5208, 11007, 2002, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11006 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11007, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
