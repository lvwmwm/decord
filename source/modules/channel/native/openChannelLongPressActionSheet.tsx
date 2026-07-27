// Module ID: 9029
// Function ID: 70970
// Name: openChannelLongPressActionSheet
// Dependencies: [4099, 9030, 1935, 2]
// Exports: openChannelLongPressActionSheet

// Module 9029 (openChannelLongPressActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = importDefault(4099);
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1935)(9030, dependencyMap.paths), combined, obj);
};
