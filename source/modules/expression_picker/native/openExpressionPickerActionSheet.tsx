// Module ID: 9930
// Function ID: 9931
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4271, 9931, 2007, 2]
// Exports: openExpressionPickerActionSheet

// Module 9930 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(9931, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
