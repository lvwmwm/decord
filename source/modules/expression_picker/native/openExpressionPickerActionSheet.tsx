// Module ID: 9599
// Function ID: 9600
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4161, 9600, 1959, 2]
// Exports: openExpressionPickerActionSheet

// Module 9599 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(9600, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
