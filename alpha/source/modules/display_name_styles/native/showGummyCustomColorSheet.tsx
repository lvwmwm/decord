// Module ID: 15557
// Function ID: 15558
// Name: showGummyCustomColorSheet
// Dependencies: [5055, 15558, 2000, 2]
// Exports: default

// Module 15557 (showGummyCustomColorSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const DisplayNameStylesGummyCustomColorSheet = "DisplayNameStylesGummyCustomColorSheet";
const result = size.fileFinishedImporting("modules/display_name_styles/native/showGummyCustomColorSheet.tsx");

export default function showGummyCustomColorSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15558, dependencyMap.paths), DisplayNameStylesGummyCustomColorSheet, arg0, "stack");
};
export const DISPLAY_NAME_STYLES_GUMMY_CUSTOM_COLOR_SHEET_KEY = "DisplayNameStylesGummyCustomColorSheet";
