// Module ID: 11579
// Function ID: 11580
// Name: threadActionSheets
// Dependencies: [4724, 11580, 1980, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11579 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11580, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
