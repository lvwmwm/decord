// Module ID: 9073
// Function ID: 71121
// Name: openChannelLongPressActionSheet
// Dependencies: [4133, 9074, 1935, 2]
// Exports: openChannelLongPressActionSheet

// Module 9073 (openChannelLongPressActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = importDefault(4133);
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1935)(9074, dependencyMap.paths), combined, obj);
};
