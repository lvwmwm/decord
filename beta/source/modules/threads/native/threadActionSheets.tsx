// Module ID: 11604
// Function ID: 11605
// Name: threadActionSheets
// Dependencies: [4755, 11605, 1980, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11604 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11605, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
