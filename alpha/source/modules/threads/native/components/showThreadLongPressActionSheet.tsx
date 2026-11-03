// Module ID: 18316
// Function ID: 18317
// Name: showThreadLongPressActionSheet
// Dependencies: [5381, 18317, 2123, 2]
// Exports: default

// Module 18316 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
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
  obj.openLazy(asyncRequire(18317, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
