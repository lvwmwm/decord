// Module ID: 15500
// Function ID: 15501
// Name: showCustomColorPickerActionSheet
// Dependencies: [5115, 15501, 2000, 2]
// Exports: default

// Module 15500 (showCustomColorPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15501, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
