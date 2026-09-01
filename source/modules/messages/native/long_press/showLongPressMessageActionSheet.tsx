// Module ID: 11240
// Function ID: 11241
// Name: showLongPressMessageActionSheet
// Dependencies: [4445, 11241, 2009, 2]
// Exports: showLongPressMessageActionSheet

// Module 11240 (showLongPressMessageActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11241, dependencyMap.paths), "MessageLongPressActionSheet", closure_0);
};
