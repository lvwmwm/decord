// Module ID: 10651
// Function ID: 10652
// Name: openChannelLongPressActionSheet
// Dependencies: [4854, 10652, 1987, 2]
// Exports: openChannelLongPressActionSheet

// Module 10651 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
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
  obj.openLazy(combined(1987)(10652, dependencyMap.paths), combined, obj2);
};
