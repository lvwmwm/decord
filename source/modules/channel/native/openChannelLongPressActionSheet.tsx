// Module ID: 9666
// Function ID: 9667
// Name: openChannelLongPressActionSheet
// Dependencies: [4271, 9667, 1988, 2]
// Exports: openChannelLongPressActionSheet

// Module 9666 (openChannelLongPressActionSheet)
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
  obj.openLazy(combined(1988)(9667, dependencyMap.paths), combined, obj);
};
