// Module ID: 10953
// Function ID: 10954
// Name: openChannelLongPressActionSheet
// Dependencies: [5406, 10954, 2118, 2]
// Exports: openChannelLongPressActionSheet

// Module 10953 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
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
  obj.openLazy(combined(2118)(10954, dependencyMap.paths), combined, obj2);
}
