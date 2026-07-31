// Module ID: 10384
// Function ID: 10385
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4161, 10385, 1959, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10384 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4161);
  obj = { channel };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10385, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
