// Module ID: 13849
// Function ID: 13850
// Name: openChannelLongPressActionSheet
// Dependencies: [5127, 13850, 2119, 2]
// Exports: openChannelLongPressActionSheet

// Module 13849 (openChannelLongPressActionSheet)
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
  obj.openLazy(combined(2119)(13850, dependencyMap.paths), combined, obj2);
}
