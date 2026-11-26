// Module ID: 18838
// Function ID: 18839
// Name: showThreadLongPressActionSheet
// Dependencies: [5542, 18839, 2121, 2]
// Exports: default

// Module 18838 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
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
  obj.openLazy(asyncRequire(18839, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
