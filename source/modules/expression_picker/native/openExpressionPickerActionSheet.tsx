// Module ID: 9858
// Function ID: 9859
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4270, 9859, 1988, 2]
// Exports: openExpressionPickerActionSheet

// Module 9858 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(9859, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
