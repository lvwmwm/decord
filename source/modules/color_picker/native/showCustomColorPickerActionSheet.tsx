// Module ID: 13903
// Function ID: 13904
// Name: showCustomColorPickerActionSheet
// Dependencies: [4271, 13904, 1988, 2]
// Exports: default

// Module 13903 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(13904, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
