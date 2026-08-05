// Module ID: 15115
// Function ID: 15116
// Name: showThreadLongPressActionSheet
// Dependencies: [4223, 15116, 1959, 2]
// Exports: default

// Module 15115 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4223);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15116, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
