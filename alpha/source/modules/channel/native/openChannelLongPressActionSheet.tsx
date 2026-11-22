// Module ID: 13843
// Function ID: 13844
// Name: openChannelLongPressActionSheet
// Dependencies: [5127, 13844, 2119, 2]
// Exports: openChannelLongPressActionSheet

// Module 13843 (openChannelLongPressActionSheet)
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
  obj.openLazy(combined(2119)(13844, dependencyMap.paths), combined, obj2);
}
