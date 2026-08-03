// Module ID: 10523
// Function ID: 10524
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4223, 10524, 1959, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10523 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4223);
  obj = { channel };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10524, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
