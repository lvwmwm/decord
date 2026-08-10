// Module ID: 13905
// Function ID: 13906
// Name: showCustomColorPickerActionSheet
// Dependencies: [4271, 13906, 1988, 2]
// Exports: default

// Module 13905 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(13906, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
