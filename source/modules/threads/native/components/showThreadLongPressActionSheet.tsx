// Module ID: 15136
// Function ID: 15137
// Name: showThreadLongPressActionSheet
// Dependencies: [4253, 15137, 1959, 2]
// Exports: default

// Module 15136 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4253);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15137, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
