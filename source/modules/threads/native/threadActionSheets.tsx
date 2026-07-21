// Module ID: 10332
// Function ID: 79757
// Name: showThreadNotificationsBottomSheet
// Dependencies: []
// Exports: showThreadNotificationsBottomSheet

// Module 10332 (showThreadNotificationsBottomSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(dependencyMap[0]);
  obj = { channel };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
