// Module ID: 9558
// Function ID: 74479
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: []
// Exports: openExpressionPickerActionSheet

// Module 9558 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "ExpressionPickerActionSheet", arg0);
};
