// Module ID: 13970
// Function ID: 13971
// Name: showCustomColorPickerActionSheet
// Dependencies: [4312, 13971, 2007, 2]
// Exports: default

// Module 13970 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(13971, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
