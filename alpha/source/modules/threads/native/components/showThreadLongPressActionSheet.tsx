// Module ID: 16036
// Function ID: 16037
// Name: showThreadLongPressActionSheet
// Dependencies: [4854, 16037, 1987, 2]
// Exports: default

// Module 16036 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
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
  obj.openLazy(asyncRequire(16037, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
