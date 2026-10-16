// Module ID: 10714
// Function ID: 10715
// Name: threadActionSheets
// Dependencies: [5118, 10715, 2002, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10714 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10715, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
