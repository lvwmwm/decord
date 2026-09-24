// Module ID: 15618
// Function ID: 15619
// Name: showGummyCustomColorSheet
// Dependencies: [4757, 15619, 1984, 2]
// Exports: default

// Module 15618 (showGummyCustomColorSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const DisplayNameStylesGummyCustomColorSheet = "DisplayNameStylesGummyCustomColorSheet";
const result = size.fileFinishedImporting("modules/display_name_styles/native/showGummyCustomColorSheet.tsx");

export default function showGummyCustomColorSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15619, dependencyMap.paths), DisplayNameStylesGummyCustomColorSheet, arg0, "stack");
};
export const DISPLAY_NAME_STYLES_GUMMY_CUSTOM_COLOR_SHEET_KEY = "DisplayNameStylesGummyCustomColorSheet";
