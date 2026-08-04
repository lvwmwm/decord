// Module ID: 13811
// Function ID: 13812
// Name: showCustomColorPickerActionSheet
// Dependencies: [4253, 13812, 1959, 2]
// Exports: default

// Module 13811 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(13812, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
