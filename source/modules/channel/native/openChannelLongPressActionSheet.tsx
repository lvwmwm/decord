// Module ID: 9585
// Function ID: 9586
// Name: openChannelLongPressActionSheet
// Dependencies: [4253, 9586, 1959, 2]
// Exports: openChannelLongPressActionSheet

// Module 9585 (openChannelLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = importDefault(4253);
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1959)(9586, dependencyMap.paths), combined, obj);
};
