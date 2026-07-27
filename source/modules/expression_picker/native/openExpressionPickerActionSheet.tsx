// Module ID: 9523
// Function ID: 74332
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4099, 9524, 1935, 2]
// Exports: openExpressionPickerActionSheet

// Module 9523 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(9524, dependencyMap.paths), "ExpressionPickerActionSheet", arg0);
};
