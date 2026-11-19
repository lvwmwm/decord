// Module ID: 13754
// Function ID: 13755
// Name: openChannelLongPressActionSheet
// Dependencies: [5006, 13755, 2121, 2]
// Exports: openChannelLongPressActionSheet

// Module 13754 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
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
  obj.openLazy(combined(2121)(13755, dependencyMap.paths), combined, obj2);
}
