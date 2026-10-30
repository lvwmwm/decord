// Module ID: 10782
// Function ID: 10783
// Name: openChannelLongPressActionSheet
// Dependencies: [5253, 10783, 1995, 2]
// Exports: openChannelLongPressActionSheet

// Module 10782 (openChannelLongPressActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
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
  obj.openLazy(combined(1995)(10783, dependencyMap.paths), combined, obj2);
}
