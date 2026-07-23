// Module ID: 10346
// Function ID: 79859
// Name: showThreadNotificationsBottomSheet
// Dependencies: [4098, 10347, 1934, 2]
// Exports: showThreadNotificationsBottomSheet

// Module 10346 (showThreadNotificationsBottomSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(4098);
  obj = { channel };
  obj.openLazy(require(1934) /* maybeLoadBundle */(10347, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
