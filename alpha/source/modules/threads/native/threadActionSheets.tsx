// Module ID: 11059
// Function ID: 11060
// Name: threadActionSheets
// Dependencies: [4830, 11060, 1981, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11059 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11060, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
