// Module ID: 11407
// Function ID: 11408
// Name: openChannelLongPressActionSheet
// Dependencies: [5257, 11408, 2120, 2]
// Exports: openChannelLongPressActionSheet

// Module 11407 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
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
  obj.openLazy(combined(2120)(11408, dependencyMap.paths), combined, obj2);
}
