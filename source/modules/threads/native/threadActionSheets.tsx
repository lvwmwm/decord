// Module ID: 10194
// Function ID: 10195
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4271, 10195, 1988, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10194 (showThreadNotificationsBottomSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4271);
  obj = { channel };
  obj.openLazy(require(1988) /* asyncRequireImpl */(10195, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
