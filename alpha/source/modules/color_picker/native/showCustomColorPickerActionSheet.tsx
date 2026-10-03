// Module ID: 14417
// Function ID: 14418
// Name: showCustomColorPickerActionSheet
// Dependencies: [4854, 14418, 1987, 2]
// Exports: default

// Module 14417 (showCustomColorPickerActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14418, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
