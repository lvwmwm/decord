// Module ID: 10193
// Function ID: 10194
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4271, 10194, 1988, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10193 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4271);
  obj = { channel };
  obj.openLazy(require(1988) /* asyncRequireImpl */(10194, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
