// Module ID: 18544
// Function ID: 18545
// Name: showThreadLongPressActionSheet
// Dependencies: [5406, 18545, 2118, 2]
// Exports: default

// Module 18544 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
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
  obj.openLazy(asyncRequire(18545, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
