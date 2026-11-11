// Module ID: 10831
// Function ID: 10832
// Name: openChannelLongPressActionSheet
// Dependencies: [5489, 10832, 2118, 2]
// Exports: openChannelLongPressActionSheet

// Module 10831 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
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
  obj.openLazy(combined(2118)(10832, dependencyMap.paths), combined, obj2);
}
