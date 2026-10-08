// Module ID: 10264
// Function ID: 10265
// Name: openChannelLongPressActionSheet
// Dependencies: [5054, 10265, 1999, 2]
// Exports: openChannelLongPressActionSheet

// Module 10264 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    channelId: id,
    onClose() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1999)(10265, dependencyMap.paths), combined, obj2);
};
