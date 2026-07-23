// Module ID: 14967
// Function ID: 114083
// Name: showThreadLongPressActionSheet
// Dependencies: [4098, 14968, 1934, 2]
// Exports: default

// Module 14967 (showThreadLongPressActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4098);
  obj = {
    channelId,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1934) /* maybeLoadBundle */(14968, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
