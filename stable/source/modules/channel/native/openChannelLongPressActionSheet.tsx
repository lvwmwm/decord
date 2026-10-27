// Module ID: 10595
// Function ID: 10596
// Name: openChannelLongPressActionSheet
// Dependencies: [5155, 10596, 2002, 2]
// Exports: openChannelLongPressActionSheet

// Module 10595 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
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
  obj.openLazy(combined(2002)(10596, dependencyMap.paths), combined, obj2);
};
