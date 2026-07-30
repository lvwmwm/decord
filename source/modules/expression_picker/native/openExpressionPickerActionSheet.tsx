// Module ID: 9584
// Function ID: 9585
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4157, 9585, 1959, 2]
// Exports: openExpressionPickerActionSheet

// Module 9584 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(9585, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
