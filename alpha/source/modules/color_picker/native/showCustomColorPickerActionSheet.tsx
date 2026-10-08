// Module ID: 14662
// Function ID: 14663
// Name: showCustomColorPickerActionSheet
// Dependencies: [5054, 14663, 1999, 2]
// Exports: default

// Module 14662 (showCustomColorPickerActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14663, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
