// Module ID: 9840
// Function ID: 9841
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4253, 9841, 1959, 2]
// Exports: openExpressionPickerActionSheet

// Module 9840 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(9841, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
