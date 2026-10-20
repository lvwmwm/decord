// Module ID: 10814
// Function ID: 10815
// Name: threadActionSheets
// Dependencies: [5171, 10815, 2002, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10814 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10815, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
