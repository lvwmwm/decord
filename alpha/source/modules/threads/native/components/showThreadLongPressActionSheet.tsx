// Module ID: 18055
// Function ID: 18056
// Name: showThreadLongPressActionSheet
// Dependencies: [5247, 18056, 2000, 2]
// Exports: default

// Module 18055 (showThreadLongPressActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
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
  obj.openLazy(asyncRequire(18056, dependencyMap.paths), "ThreadLongPressActionSheet", obj2);
};
