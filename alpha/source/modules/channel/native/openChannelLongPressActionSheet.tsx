// Module ID: 13772
// Function ID: 13773
// Name: openChannelLongPressActionSheet
// Dependencies: [5037, 13773, 2121, 2]
// Exports: openChannelLongPressActionSheet

// Module 13772 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    channelId: id,
    onClose() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2121)(13773, dependencyMap.paths), combined, obj2);
}
