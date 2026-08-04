// Module ID: 15135
// Function ID: 15136
// Name: showThreadLongPressActionSheet
// Dependencies: [4253, 15136, 1959, 2]
// Exports: default

// Module 15135 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4253);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15136, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
