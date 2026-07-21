// Module ID: 9091
// Function ID: 71218
// Name: openChannelLongPressActionSheet
// Dependencies: []
// Exports: openChannelLongPressActionSheet

// Module 9091 (openChannelLongPressActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  const require = combined;
  let obj = importDefault(dependencyMap[0]);
  obj = {
    channelId: id,
    onClose() {
      callback(closure_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), combined, obj);
};
