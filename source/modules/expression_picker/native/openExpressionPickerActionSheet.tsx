// Module ID: 9925
// Function ID: 9926
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4271, 9926, 1988, 2]
// Exports: openExpressionPickerActionSheet

// Module 9925 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(9926, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
