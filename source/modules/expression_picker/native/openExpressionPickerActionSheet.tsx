// Module ID: 9566
// Function ID: 74533
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4098, 9567, 1934, 2]
// Exports: openExpressionPickerActionSheet

// Module 9566 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(9567, dependencyMap.paths), "ExpressionPickerActionSheet", arg0);
};
