// Module ID: 15146
// Function ID: 15147
// Name: openChannelLongPressActionSheet
// Dependencies: [5546, 15147, 2121, 2]
// Exports: openChannelLongPressActionSheet

// Module 15146 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
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
  obj.openLazy(combined(2121)(15147, dependencyMap.paths), combined, obj2);
}
