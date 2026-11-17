// Module ID: 18877
// Function ID: 18878
// Name: showThreadLongPressActionSheet
// Dependencies: [5546, 18878, 2121, 2]
// Exports: default

// Module 18877 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
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
  obj.openLazy(asyncRequire(18878, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
