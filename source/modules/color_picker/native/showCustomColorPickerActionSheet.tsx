// Module ID: 13965
// Function ID: 13966
// Name: showCustomColorPickerActionSheet
// Dependencies: [4310, 13966, 2007, 2]
// Exports: default

// Module 13965 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(13966, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
