// Module ID: 9137
// Function ID: 71484
// Name: openChannelLongPressActionSheet
// Dependencies: [4098, 9138, 1934, 2]
// Exports: openChannelLongPressActionSheet

// Module 9137 (openChannelLongPressActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = importDefault(4098);
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1934)(9138, dependencyMap.paths), combined, obj);
};
