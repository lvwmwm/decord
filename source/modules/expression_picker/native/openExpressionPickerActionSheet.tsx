// Module ID: 9969
// Function ID: 9970
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4310, 9970, 2007, 2]
// Exports: openExpressionPickerActionSheet

// Module 9969 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(9970, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
