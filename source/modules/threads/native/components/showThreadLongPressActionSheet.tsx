// Module ID: 15153
// Function ID: 15154
// Name: showThreadLongPressActionSheet
// Dependencies: [4253, 15154, 1988, 2]
// Exports: default

// Module 15153 (showThreadLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(4253);
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(1988) /* asyncRequireImpl */(15154, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
