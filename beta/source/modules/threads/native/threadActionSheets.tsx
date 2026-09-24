// Module ID: 11578
// Function ID: 11579
// Name: threadActionSheets
// Dependencies: [4757, 11579, 1984, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11578 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11579, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
