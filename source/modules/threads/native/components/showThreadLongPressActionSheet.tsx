// Module ID: 15239
// Function ID: 15240
// Name: showThreadLongPressActionSheet
// Dependencies: [4271, 15240, 1988, 2]
// Exports: default

// Module 15239 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4271);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1988) /* asyncRequireImpl */(15240, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
