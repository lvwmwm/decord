// Module ID: 9559
// Function ID: 74492
// Name: EXPRESSION_PICKER_ACTION_SHEET_KEY
// Dependencies: []
// Exports: openExpressionPickerActionSheet

// Module 9559 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "ExpressionPickerActionSheet", arg0);
};
