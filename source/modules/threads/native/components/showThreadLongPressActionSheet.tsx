// Module ID: 15102
// Function ID: 15103
// Name: showThreadLongPressActionSheet
// Dependencies: [4157, 15103, 1959, 2]
// Exports: default

// Module 15102 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4157);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15103, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
