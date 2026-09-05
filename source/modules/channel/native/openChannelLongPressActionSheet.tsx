// Module ID: 10913
// Function ID: 10914
// Name: openChannelLongPressActionSheet
// Dependencies: [4527, 10914, 1896, 2]
// Exports: openChannelLongPressActionSheet

// Module 10913 (openChannelLongPressActionSheet)
import set from "set" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    channelId: id,
    onClose() {
      closure_1_1(closure_1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1896)(10914, dependencyMap.paths), combined, obj);
};
