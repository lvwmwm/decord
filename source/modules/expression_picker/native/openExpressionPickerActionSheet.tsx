// Module ID: 9602
// Function ID: 74744
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4098, 9603, 1934, 2]
// Exports: openExpressionPickerActionSheet

// Module 9602 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(9603, dependencyMap.paths), "ExpressionPickerActionSheet", arg0);
};
