// Module ID: 9924
// Function ID: 9925
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4271, 9925, 1988, 2]
// Exports: openExpressionPickerActionSheet

// Module 9924 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(9925, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
