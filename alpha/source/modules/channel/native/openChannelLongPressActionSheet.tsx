// Module ID: 10802
// Function ID: 10803
// Name: openChannelLongPressActionSheet
// Dependencies: [5258, 10803, 1994, 2]
// Exports: openChannelLongPressActionSheet

// Module 10802 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
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
  obj.openLazy(combined(1994)(10803, dependencyMap.paths), combined, obj2);
}
