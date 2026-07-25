// Module ID: 15024
// Function ID: 114531
// Name: showThreadLongPressActionSheet
// Dependencies: [4099, 15025, 1935, 2]
// Exports: default

// Module 15024 (showThreadLongPressActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4099);
  obj = {
    channelId,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1935) /* maybeLoadBundle */(15025, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
