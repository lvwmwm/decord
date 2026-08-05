// Module ID: 9556
// Function ID: 9557
// Name: openChannelLongPressActionSheet
// Dependencies: [4223, 9557, 1959, 2]
// Exports: openChannelLongPressActionSheet

// Module 9556 (openChannelLongPressActionSheet)
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
  obj.openLazy(combined(1959)(9557, dependencyMap.paths), combined, obj);
};
