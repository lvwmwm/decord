// Module ID: 14488
// Function ID: 14489
// Name: showCustomColorPickerActionSheet
// Dependencies: [4445, 14489, 2008, 2]
// Exports: default

// Module 14488 (showCustomColorPickerActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const CustomColorPicker = "CustomColorPicker";
const result = set.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14489, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
