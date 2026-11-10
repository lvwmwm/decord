// Module ID: 18538
// Function ID: 18539
// Name: showThreadLongPressActionSheet
// Dependencies: [5376, 18539, 2118, 2]
// Exports: default

// Module 18538 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
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
  obj.openLazy(asyncRequire(18539, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
