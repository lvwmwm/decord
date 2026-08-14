// Module ID: 9726
// Function ID: 9727
// Name: openChannelLongPressActionSheet
// Dependencies: [4310, 9727, 2007, 2]
// Exports: openChannelLongPressActionSheet

// Module 9726 (openChannelLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = importDefault(4310);
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2007)(9727, dependencyMap.paths), combined, obj);
};
