// Module ID: 10986
// Function ID: 10987
// Name: openChannelLongPressActionSheet
// Dependencies: [5384, 10987, 2123, 2]
// Exports: openChannelLongPressActionSheet

// Module 10986 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
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
  obj.openLazy(combined(2123)(10987, dependencyMap.paths), combined, obj2);
}
