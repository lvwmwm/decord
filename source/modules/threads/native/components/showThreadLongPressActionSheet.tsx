// Module ID: 15312
// Function ID: 15313
// Name: showThreadLongPressActionSheet
// Dependencies: [4310, 15313, 2007, 2]
// Exports: default

// Module 15312 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4310);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15313, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
