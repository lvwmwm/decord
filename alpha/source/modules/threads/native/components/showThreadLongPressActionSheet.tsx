// Module ID: 16339
// Function ID: 16340
// Name: showThreadLongPressActionSheet
// Dependencies: [5054, 16340, 1999, 2]
// Exports: default

// Module 16339 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
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
  obj.openLazy(asyncRequire(16340, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
