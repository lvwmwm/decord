// Module ID: 11049
// Function ID: 11050
// Name: threadActionSheets
// Dependencies: [5246, 11050, 1999, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11049 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11050, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
