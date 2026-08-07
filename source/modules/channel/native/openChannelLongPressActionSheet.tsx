// Module ID: 9601
// Function ID: 9602
// Name: openChannelLongPressActionSheet
// Dependencies: [4270, 9602, 1988, 2]
// Exports: openChannelLongPressActionSheet

// Module 9601 (openChannelLongPressActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = importDefault(4270);
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1988)(9602, dependencyMap.paths), combined, obj);
};
