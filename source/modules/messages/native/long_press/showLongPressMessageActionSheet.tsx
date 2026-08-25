// Module ID: 11205
// Function ID: 11206
// Name: showLongPressMessageActionSheet
// Dependencies: [4347, 11206, 2009, 2]
// Exports: showLongPressMessageActionSheet

// Module 11205 (showLongPressMessageActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11206, dependencyMap.paths), "MessageLongPressActionSheet", closure_0);
};
