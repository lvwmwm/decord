// Module ID: 13695
// Function ID: 13696
// Name: showCustomColorPickerActionSheet
// Dependencies: [4157, 13696, 1959, 2]
// Exports: default

// Module 13695 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(13696, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
