// Module ID: 10803
// Function ID: 10804
// Name: threadActionSheets
// Dependencies: [5171, 10804, 2002, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10803 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10804, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
