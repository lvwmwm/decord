// Module ID: 16551
// Function ID: 16552
// Name: showThreadLongPressActionSheet
// Dependencies: [5056, 16552, 2000, 2]
// Exports: default

// Module 16551 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
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
  obj.openLazy(asyncRequire(16552, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
