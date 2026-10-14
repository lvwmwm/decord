// Module ID: 11067
// Function ID: 11068
// Name: threadActionSheets
// Dependencies: [4854, 11068, 1987, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11067 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11068, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
