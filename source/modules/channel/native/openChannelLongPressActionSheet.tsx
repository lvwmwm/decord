// Module ID: 9097
// Function ID: 9098
// Name: openChannelLongPressActionSheet
// Dependencies: [4157, 9098, 1959, 2]
// Exports: openChannelLongPressActionSheet

// Module 9097 (openChannelLongPressActionSheet)
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
  obj.openLazy(combined(1959)(9098, dependencyMap.paths), combined, obj);
};
