// Module ID: 18834
// Function ID: 18835
// Name: showThreadLongPressActionSheet
// Dependencies: [5552, 18835, 2121, 2]
// Exports: default

// Module 18834 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
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
  obj.openLazy(asyncRequire(18835, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
