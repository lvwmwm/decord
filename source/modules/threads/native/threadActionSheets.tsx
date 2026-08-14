// Module ID: 10254
// Function ID: 10255
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4310, 10255, 2007, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10254 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4310);
  obj = { channel };
  obj.openLazy(require(2007) /* asyncRequireImpl */(10255, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
