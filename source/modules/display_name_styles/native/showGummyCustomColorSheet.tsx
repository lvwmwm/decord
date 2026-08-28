// Module ID: 14876
// Function ID: 14877
// Name: showGummyCustomColorSheet
// Dependencies: [4413, 14877, 2010, 2]
// Exports: default

// Module 14876 (showGummyCustomColorSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const DisplayNameStylesGummyCustomColorSheet = "DisplayNameStylesGummyCustomColorSheet";
const result = set.fileFinishedImporting("modules/display_name_styles/native/showGummyCustomColorSheet.tsx");

export default function showGummyCustomColorSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14877, dependencyMap.paths), DisplayNameStylesGummyCustomColorSheet, arg0, "stack");
};
export const DISPLAY_NAME_STYLES_GUMMY_CUSTOM_COLOR_SHEET_KEY = "DisplayNameStylesGummyCustomColorSheet";
