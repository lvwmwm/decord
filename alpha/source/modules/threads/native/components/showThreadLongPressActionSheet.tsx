// Module ID: 17273
// Function ID: 17274
// Name: showThreadLongPressActionSheet
// Dependencies: [5171, 17274, 2002, 2]
// Exports: default

// Module 17273 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
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
  obj.openLazy(asyncRequire(17274, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
