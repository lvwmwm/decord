// Module ID: 11655
// Function ID: 11656
// Name: threadActionSheets
// Dependencies: [4794, 11656, 1980, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11655 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11656, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
