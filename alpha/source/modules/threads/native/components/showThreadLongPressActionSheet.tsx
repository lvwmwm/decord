// Module ID: 17683
// Function ID: 17684
// Name: showThreadLongPressActionSheet
// Dependencies: [5006, 17684, 2121, 2]
// Exports: default

// Module 17683 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
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
  obj.openLazy(asyncRequire(17684, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
