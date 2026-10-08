// Module ID: 10443
// Function ID: 10444
// Name: threadActionSheets
// Dependencies: [5054, 10444, 1999, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10443 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10444, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
