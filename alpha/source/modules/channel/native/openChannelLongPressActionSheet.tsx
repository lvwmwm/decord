// Module ID: 10516
// Function ID: 10517
// Name: openChannelLongPressActionSheet
// Dependencies: [5115, 10517, 2000, 2]
// Exports: openChannelLongPressActionSheet

// Module 10516 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
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
  obj.openLazy(combined(2000)(10517, dependencyMap.paths), combined, obj2);
};
