// Module ID: 15376
// Function ID: 15377
// Name: showThreadLongPressActionSheet
// Dependencies: [4342, 15377, 2007, 2]
// Exports: default

// Module 15376 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4342);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15377, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
