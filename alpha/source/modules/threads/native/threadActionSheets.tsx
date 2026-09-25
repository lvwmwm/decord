// Module ID: 10841
// Function ID: 10842
// Name: threadActionSheets
// Dependencies: [4796, 10842, 1980, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10841 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10842, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
