// Module ID: 13819
// Function ID: 13820
// Name: showCustomColorPickerActionSheet
// Dependencies: [4253, 13820, 1988, 2]
// Exports: default

// Module 13819 (showCustomColorPickerActionSheet)
const CustomColorPicker = "CustomColorPicker";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4253).openLazy(require(1988) /* asyncRequireImpl */(13820, dependencyMap.paths), CustomColorPicker, arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
