// Module ID: 15069
// Function ID: 114710
// Name: showThreadLongPressActionSheet
// Dependencies: [4133, 15070, 1935, 2]
// Exports: default

// Module 15069 (showThreadLongPressActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4133);
  obj = {
    channelId,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1935) /* maybeLoadBundle */(15070, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
