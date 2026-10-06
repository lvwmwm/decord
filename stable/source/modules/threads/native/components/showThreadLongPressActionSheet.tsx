// Module ID: 15745
// Function ID: 15746
// Name: showThreadLongPressActionSheet
// Dependencies: [4801, 15746, 1987, 2]
// Exports: default

// Module 15745 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
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
  obj.openLazy(asyncRequire(15746, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
