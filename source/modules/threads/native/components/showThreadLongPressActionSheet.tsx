// Module ID: 15122
// Function ID: 15123
// Name: showThreadLongPressActionSheet
// Dependencies: [4161, 15123, 1959, 2]
// Exports: default

// Module 15122 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4161);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15123, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
