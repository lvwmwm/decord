// Module ID: 10309
// Function ID: 79709
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4099, 10310, 1935, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10309 (showThreadNotificationsBottomSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4099);
  obj = { channel };
  obj.openLazy(require(1935) /* maybeLoadBundle */(10310, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
