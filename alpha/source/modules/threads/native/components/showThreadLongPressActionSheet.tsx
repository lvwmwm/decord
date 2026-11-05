// Module ID: 18457
// Function ID: 18458
// Name: showThreadLongPressActionSheet
// Dependencies: [5384, 18458, 2123, 2]
// Exports: default

// Module 18457 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
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
  obj.openLazy(asyncRequire(18458, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
