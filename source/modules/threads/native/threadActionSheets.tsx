// Module ID: 10308
// Function ID: 79704
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4099, 10309, 1935, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10308 (showThreadNotificationsBottomSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4099);
  obj = { channel };
  obj.openLazy(require(1935) /* maybeLoadBundle */(10309, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
