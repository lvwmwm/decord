// Module ID: 11014
// Function ID: 11015
// Name: threadActionSheets
// Dependencies: [5211, 11015, 1999, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11014 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11015, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
