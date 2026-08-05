// Module ID: 10080
// Function ID: 10081
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4223, 10081, 1959, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10080 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4223);
  obj = { channel };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10081, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
