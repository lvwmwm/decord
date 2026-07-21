// Module ID: 13446
// Function ID: 102119
// Name: showCustomColorPickerActionSheet
// Dependencies: []
// Exports: default

// Module 13446 (showCustomColorPickerActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "CustomColorPicker", arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
