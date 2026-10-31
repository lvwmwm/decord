// Module ID: 18159
// Function ID: 18160
// Name: showThreadLongPressActionSheet
// Dependencies: [5258, 18160, 1994, 2]
// Exports: default

// Module 18159 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
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
  obj.openLazy(asyncRequire(18160, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
