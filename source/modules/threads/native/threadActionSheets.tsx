// Module ID: 10199
// Function ID: 10200
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4271, 10200, 2007, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10199 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4271);
  obj = { channel };
  obj.openLazy(require(2007) /* asyncRequireImpl */(10200, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
