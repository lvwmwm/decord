// Module ID: 15840
// Function ID: 15841
// Name: showCustomColorPickerActionSheet
// Dependencies: [5127, 15841, 2119, 2]
// Exports: default

// Module 15840 (showCustomColorPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15841, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
