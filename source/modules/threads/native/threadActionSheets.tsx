// Module ID: 10349
// Function ID: 79838
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4133, 10350, 1935, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10349 (showThreadNotificationsBottomSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4133);
  obj = { channel };
  obj.openLazy(require(1935) /* maybeLoadBundle */(10350, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
