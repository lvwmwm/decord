// Module ID: 9277
// Function ID: 9278
// Name: openChannelLongPressActionSheet
// Dependencies: [4223, 9278, 1959, 2]
// Exports: openChannelLongPressActionSheet

// Module 9277 (openChannelLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = importDefault(4223);
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1959)(9278, dependencyMap.paths), combined, obj);
};
