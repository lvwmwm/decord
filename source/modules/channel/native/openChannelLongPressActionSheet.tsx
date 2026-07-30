// Module ID: 9093
// Function ID: 9094
// Name: openChannelLongPressActionSheet
// Dependencies: [4157, 9094, 1959, 2]
// Exports: openChannelLongPressActionSheet

// Module 9093 (openChannelLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = importDefault(4157);
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1959)(9094, dependencyMap.paths), combined, obj);
};
