// Module ID: 13845
// Function ID: 13846
// Name: openChannelLongPressActionSheet
// Dependencies: [5127, 13846, 2119, 2]
// Exports: openChannelLongPressActionSheet

// Module 13845 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
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
  obj.openLazy(combined(2119)(13846, dependencyMap.paths), combined, obj2);
}
