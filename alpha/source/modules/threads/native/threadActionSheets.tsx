// Module ID: 11063
// Function ID: 11064
// Name: threadActionSheets
// Dependencies: [4809, 11064, 1981, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11063 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11064, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
