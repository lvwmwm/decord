// Module ID: 14009
// Function ID: 14010
// Name: showCustomColorPickerActionSheet
// Dependencies: [4342, 14010, 2007, 2]
// Exports: default

// Module 14009 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(14010, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
