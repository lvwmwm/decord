// Module ID: 13714
// Function ID: 13715
// Name: showCustomColorPickerActionSheet
// Dependencies: [4161, 13715, 1959, 2]
// Exports: default

// Module 13714 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(13715, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
