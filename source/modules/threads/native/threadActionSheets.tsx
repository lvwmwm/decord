// Module ID: 10240
// Function ID: 10241
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4312, 10241, 2007, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10240 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4312);
  obj = { channel };
  obj.openLazy(require(2007) /* asyncRequireImpl */(10241, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
