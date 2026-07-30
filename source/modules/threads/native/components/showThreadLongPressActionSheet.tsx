// Module ID: 15096
// Function ID: 15097
// Name: showThreadLongPressActionSheet
// Dependencies: [4157, 15097, 1959, 2]
// Exports: default

// Module 15096 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4157);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15097, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
