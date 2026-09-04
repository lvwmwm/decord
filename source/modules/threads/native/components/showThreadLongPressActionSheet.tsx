// Module ID: 16036
// Function ID: 16037
// Name: showThreadLongPressActionSheet
// Dependencies: [4448, 16037, 2008, 2]
// Exports: default

// Module 16036 (showThreadLongPressActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(asyncRequireImpl(16037, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};
