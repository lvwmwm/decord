// Module ID: 15613
// Function ID: 15614
// Name: showCustomColorPickerActionSheet
// Dependencies: [5155, 15614, 2002, 2]
// Exports: default

// Module 15613 (showCustomColorPickerActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const CustomColorPicker = "CustomColorPicker";
const result = size.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15614, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
