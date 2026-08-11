// Module ID: 9671
// Function ID: 9672
// Name: openChannelLongPressActionSheet
// Dependencies: [4271, 9672, 2007, 2]
// Exports: openChannelLongPressActionSheet

// Module 9671 (openChannelLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = importDefault(4271);
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2007)(9672, dependencyMap.paths), combined, obj);
};
