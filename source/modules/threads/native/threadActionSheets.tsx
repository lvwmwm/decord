// Module ID: 11312
// Function ID: 11313
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4527, 11313, 1896, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 11312 (showThreadNotificationsBottomSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel };
  obj.openLazy(asyncRequireImpl(11313, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
