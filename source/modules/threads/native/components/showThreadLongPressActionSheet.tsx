// Module ID: 15321
// Function ID: 15322
// Name: showThreadLongPressActionSheet
// Dependencies: [4310, 15322, 2007, 2]
// Exports: default

// Module 15321 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4310);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15322, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
