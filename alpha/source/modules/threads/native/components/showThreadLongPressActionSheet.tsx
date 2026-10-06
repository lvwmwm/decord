// Module ID: 16079
// Function ID: 16080
// Name: showThreadLongPressActionSheet
// Dependencies: [4860, 16080, 1987, 2]
// Exports: default

// Module 16079 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
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
  obj.openLazy(asyncRequire(16080, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
