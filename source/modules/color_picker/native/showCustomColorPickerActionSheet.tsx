// Module ID: 13629
// Function ID: 104759
// Name: showCustomColorPickerActionSheet
// Dependencies: [4099, 13630, 1935, 2]
// Exports: default

// Module 13629 (showCustomColorPickerActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/color_picker/native/showCustomColorPickerActionSheet.tsx");

export default function showCustomColorPickerActionSheet(arg0, arg1) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(13630, dependencyMap.paths), "CustomColorPicker", arg0, arg1);
};
export const CUSTOM_COLOR_PICKER_KEY = "CustomColorPicker";
