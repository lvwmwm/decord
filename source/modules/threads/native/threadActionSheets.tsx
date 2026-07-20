// Module ID: 10326
// Function ID: 79738
// Name: showThreadNotificationsBottomSheet
// Dependencies: [0, 0, 0, 0]
// Exports: showThreadNotificationsBottomSheet

// Module 10326 (showThreadNotificationsBottomSheet)
import result from "result";

result = result.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = importDefault(dependencyMap[0]);
  obj = { channel };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};
