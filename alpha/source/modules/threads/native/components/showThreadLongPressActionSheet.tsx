// Module ID: 18705
// Function ID: 18706
// Name: showThreadLongPressActionSheet
// Dependencies: [5489, 18706, 2118, 2]
// Exports: default

// Module 18705 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
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
  obj.openLazy(asyncRequire(18706, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
