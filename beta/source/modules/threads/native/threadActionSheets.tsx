// Module ID: 11575
// Function ID: 11576
// Name: threadActionSheets
// Dependencies: [4723, 11576, 1980, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11575 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11576, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
