// Module ID: 17849
// Function ID: 17850
// Name: showThreadLongPressActionSheet
// Dependencies: [5257, 17850, 2120, 2]
// Exports: default

// Module 17849 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
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
  obj.openLazy(asyncRequire(17850, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
