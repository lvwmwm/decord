// Module ID: 17510
// Function ID: 17511
// Name: showThreadLongPressActionSheet
// Dependencies: [5008, 17511, 2119, 2]
// Exports: default

// Module 17510 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    channelId,
    onClose() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(asyncRequire(17511, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
