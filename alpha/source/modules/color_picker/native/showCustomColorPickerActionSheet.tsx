// Module ID: 14353
// Function ID: 14354
// Name: showCustomColorPickerActionSheet
// Dependencies: [4830, 14354, 1981, 2]
// Exports: default

// Module 14353 (showCustomColorPickerActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14354, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
