// Module ID: 15703
// Function ID: 15704
// Name: showThreadLongPressActionSheet
// Dependencies: [4445, 15704, 2009, 2]
// Exports: default

// Module 15703 (showThreadLongPressActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(asyncRequireImpl(15704, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
