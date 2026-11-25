// Module ID: 17644
// Function ID: 17645
// Name: showThreadLongPressActionSheet
// Dependencies: [5127, 17645, 2119, 2]
// Exports: default

// Module 17644 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
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
  obj.openLazy(asyncRequire(17645, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
