// Module ID: 10416
// Function ID: 10417
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4411, 10417, 2009, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10416 (showThreadNotificationsBottomSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const result = set.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel };
  obj.openLazy(asyncRequireImpl(10417, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
