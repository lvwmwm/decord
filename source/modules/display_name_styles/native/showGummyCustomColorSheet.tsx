// Module ID: 14791
// Function ID: 14792
// Name: showGummyCustomColorSheet
// Dependencies: [4347, 14792, 2009, 2]
// Exports: default

// Module 14791 (showGummyCustomColorSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const DisplayNameStylesGummyCustomColorSheet = "DisplayNameStylesGummyCustomColorSheet";
const result = set.fileFinishedImporting("modules/display_name_styles/native/showGummyCustomColorSheet.tsx");

export default function showGummyCustomColorSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14792, dependencyMap.paths), DisplayNameStylesGummyCustomColorSheet, arg0, "stack");
};
export const DISPLAY_NAME_STYLES_GUMMY_CUSTOM_COLOR_SHEET_KEY = "DisplayNameStylesGummyCustomColorSheet";
