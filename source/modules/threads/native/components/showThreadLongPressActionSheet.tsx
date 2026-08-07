// Module ID: 15169
// Function ID: 15170
// Name: showThreadLongPressActionSheet
// Dependencies: [4270, 15170, 1988, 2]
// Exports: default

// Module 15169 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4270);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1988) /* asyncRequireImpl */(15170, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
