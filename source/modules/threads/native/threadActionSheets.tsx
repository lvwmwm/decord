// Module ID: 10375
// Function ID: 80051
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4098, 10376, 1934, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10375 (showThreadNotificationsBottomSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4098);
  obj = { channel };
  obj.openLazy(require(1934) /* maybeLoadBundle */(10376, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
