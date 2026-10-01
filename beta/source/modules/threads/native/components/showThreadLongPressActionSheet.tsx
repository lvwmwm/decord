// Module ID: 15746
// Function ID: 15747
// Name: showThreadLongPressActionSheet
// Dependencies: [4800, 15747, 1981, 2]
// Exports: default

// Module 15746 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
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
  obj.openLazy(asyncRequire(15747, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
