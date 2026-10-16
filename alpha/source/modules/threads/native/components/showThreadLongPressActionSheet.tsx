// Module ID: 17166
// Function ID: 17167
// Name: showThreadLongPressActionSheet
// Dependencies: [5118, 17167, 2002, 2]
// Exports: default

// Module 17166 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
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
  obj.openLazy(asyncRequire(17167, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
