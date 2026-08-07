// Module ID: 10127
// Function ID: 10128
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4270, 10128, 1988, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10127 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4270);
  obj = { channel };
  obj.openLazy(require(1988) /* asyncRequireImpl */(10128, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
