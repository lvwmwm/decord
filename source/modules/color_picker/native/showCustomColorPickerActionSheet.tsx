// Module ID: 14595
// Function ID: 14596
// Name: showCustomColorPickerActionSheet
// Dependencies: [4527, 14596, 1896, 2]
// Exports: default

// Module 14595 (showCustomColorPickerActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const CustomColorPicker = "CustomColorPicker";
const result = set.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14596, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
