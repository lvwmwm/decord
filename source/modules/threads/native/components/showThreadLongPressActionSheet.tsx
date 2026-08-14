// Module ID: 15326
// Function ID: 15327
// Name: showThreadLongPressActionSheet
// Dependencies: [4310, 15327, 2007, 2]
// Exports: default

// Module 15326 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4310);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15327, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
