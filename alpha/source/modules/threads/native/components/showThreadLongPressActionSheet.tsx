// Module ID: 17785
// Function ID: 17786
// Name: showThreadLongPressActionSheet
// Dependencies: [5226, 17786, 2119, 2]
// Exports: default

// Module 17785 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
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
  obj.openLazy(asyncRequire(17786, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
