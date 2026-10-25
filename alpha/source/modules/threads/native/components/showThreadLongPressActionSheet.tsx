// Module ID: 17541
// Function ID: 17542
// Name: showThreadLongPressActionSheet
// Dependencies: [5210, 17542, 2002, 2]
// Exports: default

// Module 17541 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
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
  obj.openLazy(asyncRequire(17542, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
