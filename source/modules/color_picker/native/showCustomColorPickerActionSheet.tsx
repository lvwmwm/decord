// Module ID: 13782
// Function ID: 13783
// Name: showCustomColorPickerActionSheet
// Dependencies: [4223, 13783, 1959, 2]
// Exports: default

// Module 13782 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(13783, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
