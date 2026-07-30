// Module ID: 10366
// Function ID: 10367
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4157, 10367, 1959, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10366 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4157);
  obj = { channel };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10367, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
