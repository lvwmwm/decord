// Module ID: 15014
// Function ID: 114404
// Name: showThreadLongPressActionSheet
// Dependencies: [4098, 15015, 1934, 2]
// Exports: default

// Module 15014 (showThreadLongPressActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4098);
  obj = {
    channelId,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1934) /* maybeLoadBundle */(15015, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
