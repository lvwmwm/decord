// Module ID: 11542
// Function ID: 11543
// Name: threadActionSheets
// Dependencies: [4725, 11543, 1984, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11542 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11543, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};
