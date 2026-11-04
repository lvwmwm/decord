// Module ID: 10980
// Function ID: 10981
// Name: openChannelLongPressActionSheet
// Dependencies: [5382, 10981, 2123, 2]
// Exports: openChannelLongPressActionSheet

// Module 10980 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
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
  obj.openLazy(combined(2123)(10981, dependencyMap.paths), combined, obj2);
}
