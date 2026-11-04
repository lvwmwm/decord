// Module ID: 18427
// Function ID: 18428
// Name: showThreadLongPressActionSheet
// Dependencies: [5382, 18428, 2123, 2]
// Exports: default

// Module 18427 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
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
  obj.openLazy(asyncRequire(18428, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
