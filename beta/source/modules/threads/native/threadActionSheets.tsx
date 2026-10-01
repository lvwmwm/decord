// Module ID: 10854
// Function ID: 10855
// Name: threadActionSheets
// Dependencies: [4800, 10855, 1981, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10854 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10855, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
