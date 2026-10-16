// Module ID: 10711
// Function ID: 10712
// Name: threadActionSheets
// Dependencies: [5118, 10712, 2002, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10711 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(10712, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
};
