// Module ID: 10790
// Function ID: 10791
// Name: threadActionSheets
// Dependencies: [5155, 10791, 2002, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10790 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10791, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
