// Module ID: 10513
// Function ID: 10514
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4342, 10514, 2007, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10513 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4342);
  obj = { channel };
  obj.openLazy(require(2007) /* asyncRequireImpl */(10514, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
