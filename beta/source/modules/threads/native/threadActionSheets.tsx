// Module ID: 11042
// Function ID: 11043
// Name: threadActionSheets
// Dependencies: [5242, 11043, 2002, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11042 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11043, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
