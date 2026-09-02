// Module ID: 11463
// Function ID: 11464
// Name: showLongPressMessageActionSheet
// Dependencies: [4445, 11464, 2008, 2]
// Exports: showLongPressMessageActionSheet

// Module 11463 (showLongPressMessageActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11464, dependencyMap.paths), "MessageLongPressActionSheet", closure_0);
};
