// Module ID: 11007
// Function ID: 11008
// Name: threadActionSheets
// Dependencies: [5210, 11008, 2002, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11007 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11008, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
