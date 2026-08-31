// Module ID: 10911
// Function ID: 10912
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4415, 10912, 2009, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10911 (showThreadNotificationsBottomSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4415 */;

const result = set.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel };
  obj.openLazy(asyncRequireImpl(10912, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
