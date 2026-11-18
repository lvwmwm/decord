// Module ID: 17690
// Function ID: 17691
// Name: showThreadLongPressActionSheet
// Dependencies: [5037, 17691, 2121, 2]
// Exports: default

// Module 17690 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
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
  obj.openLazy(asyncRequire(17691, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
