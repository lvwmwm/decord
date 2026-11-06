// Module ID: 18449
// Function ID: 18450
// Name: showThreadLongPressActionSheet
// Dependencies: [5404, 18450, 2118, 2]
// Exports: default

// Module 18449 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
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
  obj.openLazy(asyncRequire(18450, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
