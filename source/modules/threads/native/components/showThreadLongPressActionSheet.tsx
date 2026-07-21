// Module ID: 14843
// Function ID: 111872
// Name: showThreadLongPressActionSheet
// Dependencies: []
// Exports: default

// Module 14843 (showThreadLongPressActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = importDefault(dependencyMap[0]);
  obj = {
    channelId,
    onClose() {
      callback(closure_2[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
