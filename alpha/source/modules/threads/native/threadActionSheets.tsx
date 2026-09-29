// Module ID: 11023
// Function ID: 11024
// Name: threadActionSheets
// Dependencies: [4800, 11024, 1981, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11023 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11024, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
