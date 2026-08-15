// Module ID: 10185
// Function ID: 10186
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4342, 10186, 2007, 2]
// Exports: openExpressionPickerActionSheet

// Module 10185 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(10186, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
