// Module ID: 10699
// Function ID: 10700
// Name: threadActionSheets
// Dependencies: [5115, 10700, 2000, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10699 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10700, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
