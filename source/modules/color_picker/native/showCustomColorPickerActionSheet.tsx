// Module ID: 13833
// Function ID: 13834
// Name: showCustomColorPickerActionSheet
// Dependencies: [4270, 13834, 1988, 2]
// Exports: default

// Module 13833 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(13834, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
