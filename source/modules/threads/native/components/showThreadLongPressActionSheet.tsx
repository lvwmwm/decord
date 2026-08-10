// Module ID: 15246
// Function ID: 15247
// Name: showThreadLongPressActionSheet
// Dependencies: [4271, 15247, 1988, 2]
// Exports: default

// Module 15246 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4271);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1988) /* asyncRequireImpl */(15247, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
