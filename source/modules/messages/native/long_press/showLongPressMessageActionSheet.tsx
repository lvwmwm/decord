// Module ID: 11589
// Function ID: 11590
// Name: showLongPressMessageActionSheet
// Dependencies: [4448, 11590, 2008, 2]
// Exports: showLongPressMessageActionSheet

// Module 11589 (showLongPressMessageActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11590, dependencyMap.paths), "MessageLongPressActionSheet", closure_0);
};
