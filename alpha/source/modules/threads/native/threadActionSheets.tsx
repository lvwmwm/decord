// Module ID: 11661
// Function ID: 11662
// Name: threadActionSheets
// Dependencies: [4796, 11662, 1980, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11661 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11662, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
