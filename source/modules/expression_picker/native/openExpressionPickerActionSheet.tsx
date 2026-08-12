// Module ID: 9971
// Function ID: 9972
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4312, 9972, 2007, 2]
// Exports: openExpressionPickerActionSheet

// Module 9971 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(9972, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};
