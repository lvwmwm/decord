// Module ID: 10111
// Function ID: 10112
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4253, 10112, 1988, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10111 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4253);
  obj = { channel };
  obj.openLazy(require(1988) /* asyncRequireImpl */(10112, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
