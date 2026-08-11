// Module ID: 15255
// Function ID: 15256
// Name: showThreadLongPressActionSheet
// Dependencies: [4271, 15256, 2007, 2]
// Exports: default

// Module 15255 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4271);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15256, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
