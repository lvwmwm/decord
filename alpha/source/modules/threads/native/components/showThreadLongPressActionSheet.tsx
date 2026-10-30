// Module ID: 18116
// Function ID: 18117
// Name: showThreadLongPressActionSheet
// Dependencies: [5253, 18117, 1995, 2]
// Exports: default

// Module 18116 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
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
  obj.openLazy(asyncRequire(18117, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
