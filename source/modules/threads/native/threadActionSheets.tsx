// Module ID: 10370
// Function ID: 10371
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4157, 10371, 1959, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10370 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4157);
  obj = { channel };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10371, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
