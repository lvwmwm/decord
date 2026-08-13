// Module ID: 9715
// Function ID: 9716
// Name: openChannelLongPressActionSheet
// Dependencies: [4310, 9716, 2007, 2]
// Exports: openChannelLongPressActionSheet

// Module 9715 (openChannelLongPressActionSheet)
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
  obj.openLazy(combined(2007)(9716, dependencyMap.paths), combined, obj);
};
