// Module ID: 11282
// Function ID: 11283
// Name: threadActionSheets
// Dependencies: [5376, 11283, 2118, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11282 (threadActionSheets)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel };
  obj.openLazy(asyncRequire(11283, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj2);
}
