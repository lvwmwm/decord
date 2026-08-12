// Module ID: 9711
// Function ID: 9712
// Name: openChannelLongPressActionSheet
// Dependencies: [4312, 9712, 2007, 2]
// Exports: openChannelLongPressActionSheet

// Module 9711 (openChannelLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = importDefault(4312);
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2007)(9712, dependencyMap.paths), combined, obj);
};
