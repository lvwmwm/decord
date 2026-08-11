// Module ID: 13913
// Function ID: 13914
// Name: showCustomColorPickerActionSheet
// Dependencies: [4271, 13914, 2007, 2]
// Exports: default

// Module 13913 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(13914, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
