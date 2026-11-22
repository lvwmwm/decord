// Module ID: 16750
// Function ID: 16751
// Name: showGummyCustomColorSheet
// Dependencies: [5127, 16751, 2119, 2]
// Exports: default

// Module 16750 (showGummyCustomColorSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const DisplayNameStylesGummyCustomColorSheet = "DisplayNameStylesGummyCustomColorSheet";
const result = size.fileFinishedImporting("modules/display_name_styles/native/showGummyCustomColorSheet.tsx");

export default function showGummyCustomColorSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16751, dependencyMap.paths), DisplayNameStylesGummyCustomColorSheet, arg0, "stack");
};
export const DISPLAY_NAME_STYLES_GUMMY_CUSTOM_COLOR_SHEET_KEY = "DisplayNameStylesGummyCustomColorSheet";
