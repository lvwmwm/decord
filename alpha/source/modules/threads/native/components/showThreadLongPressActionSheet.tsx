// Module ID: 16458
// Function ID: 16459
// Name: showThreadLongPressActionSheet
// Dependencies: [5055, 16459, 2000, 2]
// Exports: default

// Module 16458 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
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
  obj.openLazy(asyncRequire(16459, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
