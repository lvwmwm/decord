// Module ID: 9919
// Function ID: 9920
// Name: openChannelLongPressActionSheet
// Dependencies: [4342, 9920, 2007, 2]
// Exports: openChannelLongPressActionSheet

// Module 9919 (openChannelLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = importDefault(4342);
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2007)(9920, dependencyMap.paths), combined, obj);
};
