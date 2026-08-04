// Module ID: 10109
// Function ID: 10110
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4253, 10110, 1959, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10109 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4253);
  obj = { channel };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10110, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
