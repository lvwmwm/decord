// Module ID: 9563
// Function ID: 74461
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: [4133, 9564, 1935, 2]
// Exports: openExpressionPickerActionSheet

// Module 9563 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(9564, dependencyMap.paths), "ExpressionPickerActionSheet", arg0);
};
