// Module ID: 9587
// Function ID: 9588
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4157, 9588, 1959, 2]
// Exports: openExpressionPickerActionSheet

// Module 9587 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(9588, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
