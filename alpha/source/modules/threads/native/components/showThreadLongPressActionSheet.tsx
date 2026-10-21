// Module ID: 17368
// Function ID: 17369
// Name: showThreadLongPressActionSheet
// Dependencies: [5192, 17369, 2002, 2]
// Exports: default

// Module 17368 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
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
  obj.openLazy(asyncRequire(17369, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
